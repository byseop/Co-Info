import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Chart from './Charts';
import './ChartContainer.css';

@inject('marketStore')
@observer
class ChartContainer extends Component {
  showedCandles = [];
  componentDidMount() {
    const { getCandles, refreshingCandles } = this.props.marketStore;
    getCandles();
    setInterval(() => {
      refreshingCandles();
    }, 400);
  }
  render() {
    const { candles } = this.props.marketStore;
    const renderChart = () => {
      if (candles.length > 0) {
        return (this.showedCandles = candles);
      }
    };
    return <Chart candles={renderChart()} />;
  }
}

export default ChartContainer;
