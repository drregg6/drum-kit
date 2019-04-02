import React, { Component } from 'react';
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
      ]
    }
  }

  findAudio = (key) => {
    key = key.toLowerCase();
    for (let i = 0; i < this.state.sounds.length; i++) {
      if (this.state.sounds[i].key === key) {
        return this.state.sounds[i];
      }
    }
    return null;
  }

  handleKeyDown = (ev) => {
    if (this.findAudio(ev.key)) {
      this.findAudio(ev.key).audio.play();
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
      </div>
    );
  }
}

export default App;
