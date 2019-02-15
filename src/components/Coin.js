import React, { Component } from 'react'
import CurrentPrice from './CurrnetPrice';

export default class Coin extends Component {
  tick;
  change;
  changePrice;
  changeRate;
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { market, tickPrice, currentPrice } = this.props;
    if (prevProps !== currentPrice) {
      if (currentPrice.length > 0) {
        const price = tickPrice.find(info => (
          info.market === market
        )).trade_price;
        const changeMark = tickPrice.find(info => (
          info.market === market
        )).change;
        const cPrice = tickPrice.find(info => (
          info.market === market
        )).change_price;
        const cRate = tickPrice.find(info => (
          info.market === market
        )).change_rate;
        // console.log(price);
        if (price > 1) {
          this.tick = price.toLocaleString();
          if (changeMark === 'RISE' || changeMark === 'EVEN') {
            this.changePrice = '+'+cPrice.toLocaleString();
          } else if (changeMark === 'FALL') {
            this.changePrice = -cPrice.toLocaleString();
          }
        } else {
          this.tick = price;
          if (changeMark === 'RISE' || changeMark === 'EVEN') {
            this.changePrice = '+'+cPrice;
          } else if (changeMark === 'FALL') {
            this.changePrice = -cPrice;
          }
        }
        if (cRate > 0) {
          this.changeRate = '+'+(cRate*100).toFixed(2)
        } else {
          this.changeRate = -(cRate*100).toFixed(2)
        }
        this.change = changeMark;
      } else {
        this.tick = this.tick;
        this.change = this.change
        this.changePrice = this.changePrice;
      }
    }
  }
  render() {
    const { korean_name, market } = this.props;
    return (
      <div className="c_list">
        <div>
          <div className="korean_name">{korean_name}</div>
          <div className="market_name">{market}</div>
        </div>
        <div className="tick"><CurrentPrice price={this.tick} market={market} /></div>
        <div className="change">
          <span className={`change_price ${this.change}`}>
            {this.changePrice} ({this.changeRate}%)
            {`
              ${this.change === 'RISE' ? '▲' : ''}
              ${this.change === 'FALL' ? '▼' : ''}
            `}
          </span>
        </div>
      </div>
    )
  }
}
Coin.defaultProps = {
  korean_name: 'Coin Name',
  market: 'Market',
  price: 'Price'
}
