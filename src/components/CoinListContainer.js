import React from 'react';
import CoinList from './CoinList';
import './CoinListContainer.css';
import { inject, observer } from 'mobx-react';

const CoinListContainer = ({ selectedMarketCode, currentPrice, tickPrice }) => {
  return (
    <>
      <div className="title">실시간 시세</div>
      <CoinList selectedMarketCode={selectedMarketCode} currentPrice={currentPrice} tickPrice={tickPrice} />
    </>
  );
};

export default inject(({ marketStore }) => ({
  selectedMarketCode: marketStore.selectedMarketCode,
  tickPrice: marketStore.tickPrice,
  currentPrice: marketStore.currentPrice
}))(observer(CoinListContainer));
