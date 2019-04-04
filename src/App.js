/*

- REDUX

*/

// react
import React, { Component } from 'react';
import './App.css';
import DrumKit from './components/DrumKit';
import Header from './components/Header';

// redux
import { Provider } from 'react-redux';
import store from './store';

// sounds
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

  //   this.state = {
  //     sounds: [
  //       {
  //         key: 'Q',
  //         audio: new Audio(boom),
  //         display: 'BOOM'
  //       },
  //       {
  //         key: 'W',
  //         audio: new Audio(clap),
  //         display: 'CLAP'
  //       },
  //       {
  //         key: 'E',
  //         audio: new Audio(hihat),
  //         display: 'HI-HAT'
  //       },
  //       {
  //         key: 'A',
  //         audio: new Audio(kick),
  //         display: 'KICK'
  //       },
  //       {
  //         key: 'S',
  //         audio: new Audio(openhat),
  //         display: 'OPEN HAT'
  //       },
  //       {
  //         key: 'D',
  //         audio: new Audio(ride),
  //         display: 'RIDE'
  //       },
  //       {
  //         key: 'Z',
  //         audio: new Audio(snare),
  //         display: 'SNARE'
  //       },
  //       {
  //         key: 'X',
  //         audio: new Audio(tink),
  //         display: 'TINK'
  //       },
  //       {
  //         key: 'C',
  //         audio: new Audio(tom),
  //         display: 'TOM'
  //       }
  //     ],
  //     display: 'DRUM KIT'
  //   }
  }



  addRedBG = (obj) => {
    let node = document.querySelector(`#${obj.key}`);
    node.classList.add('play-background');
  }

  removeRedBG = () => {
    let objects = document.querySelectorAll('.drum-pad');

    // remove the red background
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].classList.contains('play-background')) {
        objects[i].classList.remove('play-background');
      }
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

  setDisplay = (str='DRUM KIT') => {
    this.setState({
      display: str
    })
  }



  handleKeyDown = (ev) => {
    if (this.findAudio(ev.key)) {
      // find the object in sounds and return the object
      let object = this.findAudio(ev.key);
      // update the node
      this.addRedBG(object);

      // remove delay, restart from the beginning, and play
      if (!object.audio) return;
      object.audio.currentTime = 0;
      object.audio.play();

      // update the display
      this.setDisplay(object.display);
    }
  }
  handleKeyUp = (ev) => {
    this.removeRedBG();
    // reset display
    this.setDisplay();
  }



  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <DrumKit
            addRedBG={this.addRedBG}
            removeRedBG={this.removeRedBG}
            setDisplay={this.setDisplay}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
