
console.log('Hello World');

import 'babel-polyfill';    // makes compatible with older browsers
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';    // import a single function 'createStore' directly callable
import {Provider} from 'react-redux';
import ContentComponent from './components/Content.js';
import allReducers from './reducers';

console.log('Done with imports');


// Redux store that will hold all the state of ALL React components 
// User actions will trigger "reducers" that will put data into date store,
// which then "providers" will trigger React components to re-render (?)
//
const store = createStore(allReducers);


// Use React to put html into a div:

ReactDOM.render(<h3>Hello World</h3>, document.getElementById('header'));


// Instanciating and rendering a component/class/object:

var subContentData = ["hello world", "goodbye"];

// Using react component directly:
//
// ReactDOM.render(
  // note ContentComponent at this point is an html tag
  // and basically an object that can be instanciated with properties as xml attributes
  // note: properties are immutable, for mutable data use 'state'
  // functions can also be passed in as properties
//   <div>
//     <hr />
//     <ContentComponent contentId="contentId1" arg1="foo1" var1="bar1" subContent={subContentData}/>
//     <hr />
//   </div>,
//   document.getElementById('content')		// second argument is element to put component(s)
// );

// Using Redux provider, and giving it the created Redux store:
// Provider requires a signle child element which must be a React Component
//
ReactDOM.render(
    <Provider store={store}>
      <ContentComponent contentId="contentId1" arg1="foo1" var1="bar1" subContent={subContentData}/>
    </Provider>,
    document.getElementById('content')
);
