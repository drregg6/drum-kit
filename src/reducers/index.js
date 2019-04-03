import { combineReducers } from 'redux';
import audioReducer from './audioReducer';
import displayReducer from './displayReducer';

export default combineReducers({
    audio: audioReducer,
    display: displayReducer
});