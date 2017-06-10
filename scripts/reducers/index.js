//
// A way to organize all reducers into a single object
//

import {combineReducers} from 'redux';
import ContentReducer from './content.js';

// Here the object combineReducers() is init with contains keys that
// will be the 'prop' key the component will receive and the
// 'ContentReducer' is the Reducer that supplies the value.
//
const allReducers = combineReducers({
  contentData : ContentReducer
});

export default allReducers;
