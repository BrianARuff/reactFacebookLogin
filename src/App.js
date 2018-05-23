import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FaceBook from './FaceBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Authentication Example</h1>
        </header>
        <p className="App-intro">
          To get started, authenticate with facebook.
        </p>
          <FaceBook />
      </div>
    );
  }
}

export default App;
