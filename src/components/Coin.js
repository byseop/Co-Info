import React, { Component } from 'react';
import CurrentPrice from './CurrnetPrice';

export default class Coin extends Component {
  tick = 0;
  change;
  changePrice;
  changeRate;
  isChange = false;
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { market, tickPrice, currentPrice } = this.props;

    if (
      prevProps.currentPrice !== currentPrice &&
      prevProps.tickPrice !== tickPrice &&
      currentPrice.length === tickPrice.length
    ) {
      if (
        currentPrice.length > 0 &&
        tickPrice.length > 0 &&
        currentPrice === tickPrice
      ) {
        const coinInfoArr = tickPrice.find(info => info.market === market);
        if (coinInfoArr !== undefined) {
          const {
            trade_price,
            change,
            change_price,
            change_rate
          } = coinInfoArr;
          if (trade_price > 1) {
            this.tick = trade_price.toLocaleString();
          } else {
            this.tick = trade_price.toFixed(4);
          }
          if (change === 'RISE' || change === 'EVEN') {
            this.changePrice = '+' + change_price;
            this.changeRate = '+' + (change_rate * 100).toFixed(2);
          } else if (change === 'FALL') {
            this.changePrice = -change_price;
            this.changeRate = -(change_rate * 100).toFixed(2);
          }
          if (prevProps.tickPrice.length > 0) {
            // const prevCoinPrice = prevProps.tickPrice.find(info => info.market === market).trade_price;
            const prevCoinPrice = prevProps.tickPrice.find(info => info.market === market);
            if (prevCoinPrice !== undefined) {
              if (trade_price !== prevCoinPrice.trade_price) {
                this.isChange = true;
              }
              else this.isChange = false;
            }
          }
          this.change = change;
        }
      } else {
        this.tick = this.tick;
        this.change = this.change;
        this.changePrice = this.changePrice;
      }
    }
  }
  handleClick = () => {
    const { changingChart, market } = this.props;
    changingChart(market);
  }
  render() {
    const { korean_name, market } = this.props;
    return (
      <div className="c_list" onClick={this.handleClick}>
        <div>
          <div className="korean_name">{korean_name}</div>
          <div className="market_name">{market}</div>
        </div>
        <div className={`tick ${this.isChange === true ? 'changed' : ''}`}>
          <CurrentPrice price={this.tick} market={market} />
        </div>
        <div className="change">
          <span
            className={`change_price ${this.change}`}
          >
            {this.changePrice} ({this.changeRate}%)
            {`
              ${this.change === 'RISE' ? '▲' : ''}
              ${this.change === 'FALL' ? '▼' : ''}
            `}
          </span>
        </div>
      </div>
    );
  }
}
Coin.defaultProps = {
  korean_name: 'Coin Name',
  market: 'Market',
  price: 'Price'
};
