import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';
import DrumKit from './components/DrumKit';

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
      sounds: [
        {
          key: 'q',
          audio: new Audio(boom)
        },
        {
          key: 'w',
          audio: new Audio(clap)
        },
        {
          key: 'e',
          audio: new Audio(hihat)
        },
        {
          key: 'a',
          audio: new Audio(kick)
        },
        {
          key: 's',
          audio: new Audio(openhat)
        },
        {
          key: 'd',
          audio: new Audio(ride)
        },
        {
          key: 'z',
          audio: new Audio(snare)
        },
        {
          key: 'x',
          audio: new Audio(tink)
        },
        {
          key: 'c',
          audio: new Audio(tom)
        },
      ],
      playStatus: Sound.status.STOPPED,
      url: null
    }
  }

  handleKeyDown = (ev) => {
    switch (ev.key) {
      case 'q':
        console.log('This is the letter q');
        this.setState({
          url: boom,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 'w':
        console.log('This is the letter w');
        this.setState({
          url: clap,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 'e':
        console.log('This is the letter e');
        this.setState({
          url: hihat,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 'a':
        console.log('This is the letter a');
        this.setState({
          url: kick,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 's':
        console.log('This is the letter s');
        this.setState({
          url: openhat,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 'd':
        console.log('This is the letter d');
        this.setState({
          url: ride,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 'z':
        console.log('This is the letter z');
        this.setState({
          url: snare,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 'x':
        console.log('This is the letter x');
        this.setState({
          url: tink,
          playStatus: Sound.status.PLAYING
        });
        break;
      case 'c':
        console.log('This is the letter c');
        this.setState({
          url: tom,
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
        <DrumKit
          sounds={this.state.sounds}
        />
        <Sound
          url={this.state.url}
          playStatus={this.state.playStatus}
        />
      </div>
    );
  }
}

export default App;
