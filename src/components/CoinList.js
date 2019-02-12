import React from 'react';
import Coin from './Coin';

const CoinList = ({ selectedMarketCode, currentPrice }) => {
  const list = selectedMarketCode.map(coin => {
    return <Coin key={coin.english_name} {...coin} currentPrice={currentPrice} />
  })
  
  return (
    <div className="coin_list_inner">{list}</div>
  );
};

export default CoinList;
