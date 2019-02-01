import React from 'react';
import CoinList from './CoinList';
import './CoinListContainer.css';
import { inject, observer } from 'mobx-react';

const CoinListContainer = ({ marketCode }) => {
  return (
    <>
      <div >여기에 타이틀들어감</div>
      <CoinList marketCode={marketCode} />
    </>
  );
};

export default inject(({ marketStore }) => ({
  marketCode: marketStore.marketCode
}))(observer(CoinListContainer));
