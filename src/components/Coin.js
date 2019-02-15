import React, { Component } from 'react'
import CurrentPrice from './CurrnetPrice';

export default class Coin extends Component {
  tick;
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { market, tickPrice, currentPrice } = this.props;
    if (prevProps !== currentPrice) {
      if (currentPrice.length > 0) {
        const price = tickPrice.find(info => (
          info.market === market
        )).trade_price;
        // console.log(price);
        if (price > 1) {
          return this.tick = price.toLocaleString();
        } else {
          return this.tick = price;
        }
      } else {
        return this.tick;
      }
    }
  }
  render() {
    const { korean_name, market } = this.props;
    return (
      <>
        <div>
          <div className="korean_name">{korean_name}</div>
          <div className="market_name">{market}</div>
        </div>
        <div className="tick"><CurrentPrice price={this.tick} market={market} /></div>
        <div className="change"></div>
      </>
    )
  }
}
Coin.defaultProps = {
  korean_name: 'Coin Name',
  market: 'Market',
  price: 'Price'
}
