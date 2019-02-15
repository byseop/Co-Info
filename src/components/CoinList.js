import React from 'react';
import Coin from './Coin';

const CoinList = ({ selectedMarketCode, tickPrice, currentPrice, refreshingCurrentPrice }) => {
  const list = selectedMarketCode.map(coin => {
    return <Coin key={coin.english_name} {...coin} tickPrice={tickPrice} currentPrice={currentPrice} refreshingCurrentPrice={refreshingCurrentPrice} />
  })
  
  return (
    <div className="coin_list_inner">{list}</div>
  );
};

export default CoinList;
