import React from 'react';

const Coin = ({ korean_name, market, currentPrice }) => {
  return (
    <>
      <div>
        <div className="korean_name">{korean_name}</div>
        <div className="market_name">{market}</div>
      </div>
      <div><CurrentPrice market={market} currentPrice={currentPrice} /></div>
      <div />
    </>
  );
};

const CurrentPrice = ({ market, currentPrice }) => {
  const renderPrice = () => {
    const price = currentPrice.filter(info => (
      info.market === market
    ))[0].trade_price
    return price;
  }
  return <span>{currentPrice.length === 0 ? 'aaaaaaaaaaa' : renderPrice()}</span>
}

export default Coin;
