import React, { Component } from 'react';
import CoInfo from './CoInfo';
import { observer, inject } from 'mobx-react';
import './CoInfoContainer.css';
import ListConatiner from './ListContainer';

@inject('marketStore')
@observer
class CoInfoContainer extends Component {
  componentDidMount() {
    const { getMarketCode } = this.props.marketStore;
    getMarketCode();
  }

  render() {
    return <CoInfo chart={null} list={<ListConatiner />} />;
  }
}

export default CoInfoContainer;
