import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SimpleButton from "../Common/Components/Button/SimpleButton";
import SimpleInputText from "../Common/Components/Input/SimpleInputText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <SimpleInputText/>
          <SimpleButton ></SimpleButton>
      </div>
    );
  }
}

export default App;
