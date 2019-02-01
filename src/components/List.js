import React from 'react';
import CoinListContainer from './CoinListContainer';

const List = ({ selectedMarket, marketSelect }) => {
  const handleClick = (e) => {
    marketSelect(e.target.id);
  }
  return (
    <>
      <div className='type'>
        <div className={`type_list ${selectedMarket === 'KRW' ? 'on' : ''}`}><h3 id='KRW' onClick={handleClick}>원화거래</h3></div>
        <div className={`type_list ${selectedMarket === 'BTC' ? 'on' : ''}`}><h3 id='BTC' onClick={handleClick}>BTC</h3></div>
        <div className={`type_list ${selectedMarket === 'ETH' ? 'on' : ''}`}><h3 id='ETH' onClick={handleClick}>ETH</h3></div>
        <div className={`type_list ${selectedMarket === 'USDT' ? 'on' : ''}`}><h3 id='USDT' onClick={handleClick}>USDT</h3></div>
      </div>
      <div className='Coin_List'>
        <CoinListContainer />
      </div>
    </>
  );
};

export default List;
