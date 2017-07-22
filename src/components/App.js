import React, { Component } from 'react';
import '../styles/App.css';
import PlayList from './PlayList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Play What?!</div>
        </div>
        <PlayList />
      </div>
    );
  }
}

export default App;
