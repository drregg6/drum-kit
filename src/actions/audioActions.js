import { PLAY_AUDIO } from './types';

export const playAudio = (key) => dispatch => {
    console.log('fetching...');
    dispatch({
        type: PLAY_AUDIO,
        payload: 'hello world!'
    })
}