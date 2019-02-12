import React, { Component } from 'react';
import CoInfo from './CoInfo';
import { observer, inject } from 'mobx-react';
import './CoInfoContainer.css';

@inject('marketStore')
@observer
class CoInfoContainer extends Component {
  componentDidMount() {
    const { getMarketCode } = this.props.marketStore;
    getMarketCode();
  }

  render() {
    const { list } = this.props;
    return <CoInfo chart={null} list={list} />;
  }
}

export default CoInfoContainer;
