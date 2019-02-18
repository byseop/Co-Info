import { observable, flow, configure, action } from 'mobx';
import axios from 'axios';
import { MARKET_CODE_URL } from './API_QUERY';

configure({ enforceActions: 'observed' });

export default class marketStore {
  constructor(root) {
    this.root = root;
  }

  // 최초 페이지 로드시 마켓코드 동기화
  @observable isLoadedMarketCode = 'pending';
  @observable krwMarket = [];
  @observable btcMarket = [];
  @observable ethMarket = [];
  @observable usdtMarket = [];
  
  getMarketCode = flow(function*() {
    try {
      const response = yield axios.get(MARKET_CODE_URL);
      const data = response.data;
      this.classify(data);
      yield this.marketSelect('KRW');
      this.isLoadedMarketCode = 'done';
    }
    catch (error) {
      this.isLoadedMarketCode = 'error';
    }
  });
  getMarketCode = this.getMarketCode.bind(this);

  @action classifyKrw = allMarket => {
    this.krwMarket = allMarket.filter(list => (
      list.market.split('-')[0] === 'KRW'
    ));
  }
  @action classifyBtc = allMarket => {
    this.btcMarket = allMarket.filter(list => (
      list.market.split('-')[0] === 'BTC'
    ));
  }
  @action classifyEth = allMarket => {
    this.ethMarket = allMarket.filter(list => (
      list.market.split('-')[0] === 'ETH'
    ));
  }
  @action classifyUsdt = allMarket => {
    this.usdtMarket = allMarket.filter(list => (
      list.market.split('-')[0] === 'USDT'
    ));
  }
  classify = allMarket => {
    this.classifyKrw(allMarket);
    this.classifyBtc(allMarket);
    this.classifyEth(allMarket);
    this.classifyUsdt(allMarket);
  }

  // 마켓 탭
  @observable selectedMarket = 'KRW'; // KRW, BTC, ETH, USDT
  @observable selectedMarketCode = [];
  @observable callTickerLink = 'https://api.upbit.com/v1/ticker?markets=';
  @action marketSelect = code => {
    if (code === 'KRW') {
      this.selectedMarket = 'KRW'
      this.selectedMarketCode = this.krwMarket;
    }
    else if (code === 'BTC') {
      this.selectedMarket = 'BTC'
      this.selectedMarketCode = this.btcMarket;
    }
    else if (code === 'ETH') {
      this.selectedMarket = 'ETH'
      this.selectedMarketCode = this.ethMarket;
    }
    else if (code === 'USDT') {
      this.selectedMarket = 'USDT'
      this.selectedMarketCode = this.usdtMarket;
    }

    this.callTickerLink = 'https://api.upbit.com/v1/ticker?markets=';

    for (let i = 0; i < this.selectedMarketCode.length; i++) {
      this.callTickerLink = this.callTickerLink + this.selectedMarketCode[i].market + ',';
    }

    this.callTickerLink = this.callTickerLink.substr(0, this.callTickerLink.length-1);
    this.callCurrentPrice();
  }

  // 실시간 가격 정보
  @observable currentPrice = [];
  @observable isLoadCurrentPrice = 'pending';
  tickPrice = [];
  callCurrentPrice = flow(function*() {
    // this.tickPrice = [];
    this.currentPrice = [];
    this.isLoadCurrentPrice = 'pending';
    try {
      const response = yield axios(this.callTickerLink);
      const data = yield response.data;
      this.currentPrice = data;
      this.tickPrice = this.currentPrice;
      this.isLoadCurrentPrice = 'done';
    } catch (error) {
      console.log(error);
      this.isLoadCurrentPrice = 'error';
    }
  });
  callCurrentPrice = this.callCurrentPrice.bind(this);

  // 실시간 업데이트
  @action refreshingCurrentPrice = () => {
    if (this.isLoadCurrentPrice === 'done') {
      this.callCurrentPrice();
    }
  }
}
