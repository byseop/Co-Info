import React, { Component } from 'react';

export default class CurrnetPrice extends Component {
  beforePrice = 0;
  changeStyle={
    'border': '1px solid #000'
  };
  shouldComponentUpdate(nextProps, nextState) {
    const { price } = this.props;
    // console.log('현재값: '+price)
    // console.log('비교값: '+nextProps.price)
    if (nextProps.price === price) {
      this.beforePrice = price;
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { price, market } = this.props;
    console.log(`Refreshing ${market} price, ${this.beforePrice} -> ${price}`);
    return <span className="tick_price">{price}</span>
  }
}