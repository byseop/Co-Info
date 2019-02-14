// import React from 'react';
// import CurrentPrice from './CurrnetPrice';

// const Coin = ({korean_name, market, tickPrice, currentPrice}) => {
//   const renderPrice = () => {
//     if (tickPrice.length > 0) {
//       const price = tickPrice.find(info => (
//         info.market === market
//       )).trade_price
//       if (price > 1) {
//         return price.toLocaleString();
//       } else {
//         return price
//       }
//     }
//   }
//   const refresh = async () => {
//     if (await currentPrice.length > 0) {
//       console.log('a')
//       return renderPrice();
//     }
//     return null;
//   }
//   return (
//     <>
//       <div>
//         <div className="korean_name">{korean_name}</div>
//         <div className="market_name">{market}</div>
//       </div>
//       <div className="tick"><CurrentPrice price={refresh()} /></div>
//       <div />
//     </>
//   )
// }
// Coin.defaultProps = {
//   korean_name: 'Coin Name',
//   market: 'Market',
//   price: 'Price'
// }

// export default Coin;

import React, { Component } from 'react'
import CurrentPrice from './CurrnetPrice';

export default class Coin extends Component {
  tick = null;
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
          return this.tick = price
        }
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
        <div className="tick"><CurrentPrice price={this.tick} /></div>
        <div />
      </>
    )
  }
}
Coin.defaultProps = {
  korean_name: 'Coin Name',
  market: 'Market',
  price: 'Price'
}
