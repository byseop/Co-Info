import React, { Component } from 'react';
import CoInfoContainer from './components/CoInfoContainer';
import ListContainer from './components/ListContainer';
import ChartContainer from './components/ChartContainer';
import './App.css';

class App extends Component {
  render() {
    return <CoInfoContainer chart={<ChartContainer />} list={<ListContainer />} />;
  }
}

export default App;
