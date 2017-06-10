
import React from 'react';

// Used to create a Redux Container (a React Component plus functions for Redux to use)
import {connect} from 'react-redux';

// Used to bind and Action Creator to this:
import {bindActionCreators} from 'redux';
// An action creator that this contianer will use:
import {addNewContentActionCreator} from '../actions/newContent.jsx';

import NewContent from './new-content.jsx';

class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Content.render()');
    console.log('> props: ' + JSON.stringify(this.props));
    console.log('> state: ' + JSON.stringify(this.state));
    return(
      <div id="Content">
        <h3>Hello React-Redux</h3>
        <p>{this.props.contentProp}</p>
        <button onClick={ () => this.props.addNewContent(new Date().getTime()) } >
          Add fresh content
        </button>
        <NewContent />
      </div>
    );
  }
}

// Function called by Redux for ingecting data into component as a prop.
// 'state' param is arbitrary, should be called 'reducerOutput',
// 'contentData' is mapped in allReducers (like combineReducers({contentData : ContentReducer, ...}))
// 'contentProp' is the prop attribute this Component will look at for the incoming data
//
function mapStateToProps(state) {
  console.log('Content.mapStateToProps() state: ' + JSON.stringify(state));
  return {
    contentProp: state.contentData
  };
}


// A function that will be use to bind an action creator to a function of the contianer
// (as a property)
//
function matchDispatchToProps(dispatch) {
  console.log('Content.matchDispatchToProps() dispath: ' + JSON.stringify(dispatch));
  return bindActionCreators({
    addNewContent: addNewContentActionCreator
  }, dispatch);
}



// Export a Redux Container (which is basically a React Component
// with functions that bind it to Redux)
//
export default connect(mapStateToProps, matchDispatchToProps)(Content);
