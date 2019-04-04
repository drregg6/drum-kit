import { CHANGE_DISPLAY } from '../actions/types';

const initialState = {
    display: 'DRUM KIT'
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DISPLAY:
            return {
                ...state,
                display: action.payload
            }
        default:
            return state;
    }
}