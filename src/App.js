import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Testing</div>

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
    }
  }

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
          <h3 className={this.state.mainColor}>Everyone is Welcome!</h3>
        </header>
        <p className="button-state">{this.state.on ?
          'Yes!' : 'No!'
        }</p>
        <button
          onClick={() => this.setState({ on: true })}
        >Click</button>
        <h2>{this.state.input}</h2>
        <input type="text"  onChange={(e) => this.setState({ input: e.currentTarget.value })} />
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
