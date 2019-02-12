import React, { Component } from 'react';
import CoInfoContainer from './components/CoInfoContainer';
import ListContainer from './components/ListContainer';
import './App.css';

class App extends Component {
  render() {
    return <CoInfoContainer chart={null} list={<ListContainer />} />;
  }
}

export default App;
