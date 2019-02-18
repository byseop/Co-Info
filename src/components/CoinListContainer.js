import React, { Component } from 'react'
import CoinList from './CoinList';
import './CoinListContainer.css';
import { inject, observer } from 'mobx-react';


@inject('marketStore')
@observer
class CoinListContainer extends Component {
  componentDidMount() {
    const { refreshingCurrentPrice } = this.props.marketStore;
    setInterval(function() {
      refreshingCurrentPrice(); // 실시간시세 업데이트
    }, 400)
  }
  renderCoinList = ({ selectedMarketCode, currentPrice, tickPrice, changingChart } = this.props.marketStore) => {
    return <CoinList selectedMarketCode={selectedMarketCode} currentPrice={currentPrice} tickPrice={tickPrice} changingChart={changingChart} />
  }
  render() {
    return (
      <>
        <div className="title">실시간 시세</div>
        {this.renderCoinList()}
      </>
    )
  }
}
export default CoinListContainer;