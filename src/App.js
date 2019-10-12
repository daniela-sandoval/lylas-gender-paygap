import React, { Component } from 'react';
import logo from './logo.svg';
import Typewriter from 'typewriter-effect';
import Chat from './chat.js'
import './App.css';


class App extends Component {
  state = {
    chatStatus: false
  }
  handleClick = () => {
    this.setState({chatStatus: true})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typewriter
            options={{
              strings: ['PRACTICE MAKES PERFECT'],
              autoStart: true,
              loop: true
            }}
            />
          <p>Normalizing the negotiotion salary talk</p>
          <button onClick={this.handleClick}>Start Practicing</button>
        </header>
        <Chat />
      </div>
    )
  }
}

export default App;
