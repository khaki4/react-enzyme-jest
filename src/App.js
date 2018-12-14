import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Testing</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          Test
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World
          </a>
        </header>
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>
  }
}

export default App;
