import {combineReducers} from 'redux';
import ContentReducer from './content.js';

const allReducers = combineReducers({
  content : ContentReducer
});

export default allReducers;
