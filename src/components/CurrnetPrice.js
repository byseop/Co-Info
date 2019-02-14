import React, { Component } from 'react';

export default class CurrnetPrice extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { price } = this.props;
    // console.log(price)
    // console.log(nextProps.price)
    if (nextProps.price === price) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { price } = this.props;
    console.log(price);
    console.log('refresh!')
    return <span className="tick_price">{price}</span>
  }
}
