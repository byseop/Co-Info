import marketStore from './marketStore';

class RootStore {
  constructor() {
    this.marketStore = new marketStore(this);
  }
}

export default RootStore;
