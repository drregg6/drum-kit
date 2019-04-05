import { CHANGE_DISPLAY } from './types';

export const changeDisplay = (str) => dispatch => {
    str = (typeof str === 'undefined') ? 'DRUM KIT' : str;
    dispatch({
        type: CHANGE_DISPLAY,
        payload: str
    })
}