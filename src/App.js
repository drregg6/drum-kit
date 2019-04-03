/*

- REDUX

*/

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
          key: 'Q',
          audio: new Audio(boom),
          display: 'BOOM'
        },
        {
          key: 'W',
          audio: new Audio(clap),
          display: 'CLAP'
        },
        {
          key: 'E',
          audio: new Audio(hihat),
          display: 'HI-HAT'
        },
        {
          key: 'A',
          audio: new Audio(kick),
          display: 'KICK'
        },
        {
          key: 'S',
          audio: new Audio(openhat),
          display: 'OPEN HAT'
        },
        {
          key: 'D',
          audio: new Audio(ride),
          display: 'RIDE'
        },
        {
          key: 'Z',
          audio: new Audio(snare),
          display: 'SNARE'
        },
        {
          key: 'X',
          audio: new Audio(tink),
          display: 'TINK'
        },
        {
          key: 'C',
          audio: new Audio(tom),
          display: 'TOM'
        },
      ],
      display: 'DRUM KIT'
    }
  }

  findAudio = (key) => {
    key = key.toUpperCase();
    for (let i = 0; i < this.state.sounds.length; i++) {
      if (this.state.sounds[i].key === key) {
        return this.state.sounds[i];
      }
    }
    return null;
  }

  handleKeyDown = (ev) => {
    if (this.findAudio(ev.key)) {
      // find the object in sounds and return the object
      let object = this.findAudio(ev.key);
      // update the node
      let node = document.querySelector(`#${object.key}`);
      node.classList.add('drum-pad-keydown');

      // remove delay, restart from the beginning, and play
      if (!object.audio) return;
      object.audio.currentTime = 0;
      object.audio.play();

      // update the display
      this.setState({
        display: object.display
      })
    }
  }
  handleKeyUp = (ev) => {
    let objects = document.querySelectorAll('.drum-pad');

    // remove the red background
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].classList.contains('drum-pad-keydown')) {
        objects[i].classList.remove('drum-pad-keydown');
      }
    }

    // reset display
    this.setState({
      display: 'DRUM KIT'
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <div className="display">
          <h1>{this.state.display}</h1>
        </div>
        <DrumKit
          sounds={this.state.sounds}
        />
      </div>
    );
  }
}

export default App;
