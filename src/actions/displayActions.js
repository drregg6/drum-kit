import { CHANGE_DISPLAY } from './types';

export const alterDisplay = (str) => dispatch => {
    dispatch({
        type: CHANGE_DISPLAY,
        payload: str
    })
}