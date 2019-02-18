export const drawingChart = (data) => {
  // split the data set into ohlc and volume
  var ohlc = [],
    volume = [],
    dataLength = data.length,
    i = 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      new Date(data[i].candle_date_time_kst).getTime(), // the date
      data[i].opening_price, // open
      data[i].high_price, // high
      data[i].low_price, // low
      data[i].trade_price // close
    ]);

    volume.push([
      new Date(data[i].candle_date_time_kst).getTime(), // the date
      data[i].candle_acc_trade_volume // the volume
    ]);
  }

  /* eslint-disable-next-line */
  Highcharts.stockChart('chartBox', {
    chart: {
      animation: false
    },
    yAxis: [
      {
        labels: {
          align: 'left'
        },
        height: '80%',
        resize: {
          enabled: true
        }
      },
      {
        labels: {
          align: 'left'
        },
        top: '80%',
        height: '20%',
        offset: 0
      }
    ],
    tooltip: {
      shape: 'square',
      headerShape: 'callout',
      borderWidth: 0,
      shadow: false,
      positioner: function(width, height, point) {
        var chart = this.chart,
          position;

        if (point.isHeader) {
          position = {
            x: Math.max(
              // Left side limit
              chart.plotLeft,
              Math.min(
                point.plotX + chart.plotLeft - width / 2,
                // Right side limit
                chart.chartWidth - width - chart.marginRight
              )
            ),
            y: point.plotY
          };
        } else {
          position = {
            x: point.series.chart.plotLeft,
            y: point.series.yAxis.top - chart.plotTop
          };
        }

        return position;
      }
    },
    series: [
      {
        type: 'ohlc',
        id: 'krw-btc',
        name: 'KRW-BTC',
        data: ohlc
      },
      {
        type: 'column',
        id: 'aapl-volume',
        name: 'BTC Volume',
        data: volume,
        yAxis: 1
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false
            }
          }
        }
      ]
    }
  });
}
