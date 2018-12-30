import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getCounter from './worker.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  updateState = () => {
    this.setState(state => {
      return {
        counter: getCounter()
      }
    })
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.updateState}></button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.counter}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
