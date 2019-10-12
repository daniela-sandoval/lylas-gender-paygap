import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import Chat from './chat.js'
import { faKeyboard } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <FontAwesomeIcon className="App-logo" icon={faKeyboard}/>
          <Typewriter
            options={{
              strings: ['PRACTICE MAKES PERFECT'],
              autoStart: true,
              loop: true
            }}
            />
          <p>Normalizing the negotiotion salary talk</p>
          <button className="onscreen-btn"onClick={this.handleClick}>Sign up</button>
          <br/>
          <button className="onscreen-btn"onClick={this.handleClick}>Log In</button>
        </header>
        <Chat />
      </div>
    )
  }
}

export default App;
