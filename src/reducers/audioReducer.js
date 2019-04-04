import { PLAY_AUDIO } from '../actions/types';

// sounds
import boom from '../audio/boom.wav';
import clap from '../audio/clap.wav';
import hihat from '../audio/hihat.wav';
import kick from '../audio/kick.wav';
import openhat from '../audio/openhat.wav';
import ride from '../audio/ride.wav';
import snare from '../audio/snare.wav';
import tink from '../audio/tink.wav';
import tom from '../audio/tom.wav';

const initialState = {
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
        }
    ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case PLAY_AUDIO:
            console.log(action.payload);
            return state;
        default:
            return state;
    }
}