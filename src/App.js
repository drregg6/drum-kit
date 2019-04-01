import React, { Component } from 'react';
import Sound from 'react-sound';
import logo from './logo.svg';
import './App.css';

import boom from './audio/boom.wav';
import clap from './audio/clap.wav';
import hihat from './audio/hihat.wav';
import kick from './audio/kick.wav';
import openhat from './audio/openhat.wav';
import ride from './audio/ride.wav';
import snare from './audio/snare.wav';
import tink from './audio/tink.wav';
import tom from './audio/tom.wav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playStatus: Sound.status.STOPPED,
      url: null
    }
  }

  handleKeyDown = (ev) => {
    switch (ev.key) {
      case 'a':
        console.log('This is the letter a');
        this.setState({
          url: hihat,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 'k':
      console.log('This is the letter k');
      this.setState({
        url: ride,
        playStatus: Sound.status.PLAYING
      });
      break;
      default:
        console.log(ev.key);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Sound
          url={this.state.url}
          playStatus={this.state.playStatus}
        />
      </div>
    );
  }
}

export default App;
