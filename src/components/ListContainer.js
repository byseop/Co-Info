import React from 'react';
import List from './List';
import { observer, inject } from 'mobx-react';
import './ListContainer.css';

const ListConatiner = ({ selectedMarket, marketSelect }) => {
  return <List selectedMarket={selectedMarket} marketSelect={marketSelect} />;
};

export default inject(({ marketStore }) => ({
  selectedMarket: marketStore.selectedMarket,
  marketSelect: marketStore.marketSelect,
}))(observer(ListConatiner));
