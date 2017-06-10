/*

Actions (user, API, etc.), tigger ->

  Redux Reducers (data gatherers), that process and store data into ->

    Redux Store, which a ->

      Redux Provider is listening to, and will call enclosed ->

        Redux Containers (that have a function for the Provider to call
        and forward the incoming data to the encapsulated React Component).
*/

console.log('Hello World');

import 'babel-polyfill';    // makes compatible with older browsers
import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Content from './containers/content.jsx';

// Recall Redux Reducers are 'data gatherers that take data from an action put data into a Redux Store'.
// Following points to directory that contains an index.js which references all reducers
import allReducers from './reducers';

// import a single function 'createStore' directly callable,
// will be used to create Redux Store that holds state/data of all components
import {createStore} from 'redux';
const store = createStore(allReducers);

// Redux Provider provides data to Redux Container from a store
import {Provider} from 'react-redux';


// Redux Provider is the root element that's passed to render()
// The Redux store is passed as an attribute to the Provider
// Inside the provider is our app's main Container.
// Provider can have only 1 child element.
//
ReactDOM.render(
  <Provider store={store}>
    <Content />
  </Provider>,
  $('#content-div')[0]
);
