import React, { Component } from 'react';
import { drawingChart } from '../stores/charts';

export default class Charts extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { candles } = this.props;
    if (nextProps.candles !== candles) {
      if (candles !== undefined) {
        const nextPrice = nextProps.candles[0].trade_price;
        const currentPrice = candles[0].trade_price;
        if (nextPrice !== currentPrice) {
          // console.log(nextPrice, currentPrice);
          // console.log(candles)
          console.log('UPDATE: Chart changing observed and Update');
          return true;
        } else {
          return false;
        }
      }
      return true;
    }
    // return false;
  }
  render() {
    const { candles } = this.props;
    if (candles !== undefined) {
      drawingChart(candles.slice().reverse());
    }
    return <div className="chart_wrap" id="chartBox" />;
  }
}
