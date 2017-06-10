/**
 * A react component that's been extended into a Redux container.
 *
 */

import React from 'react';

// Used to create a Redux Container (a React Component plus a
// function for a Redux Provider to inject data)
import {connect} from 'react-redux';

//
import {bindActionCreators} from 'redux';
//
import {addNewContentActionCreator} from '../actions/newContent.jsx';



class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Content.render()');
    console.log('> props: ' + JSON.stringify(this.props));
    console.log('> state: ' + JSON.stringify(this.state));
    return(
      <div id="ContentRedux">
        <h3>Hello React-Redux</h3>
        <p>{this.props.contentProp}</p>
        <button onClick={ () => this.props.addNewContent(new Date().getTime()) } >
          Add fresh content
        </button>
      </div>
    );
  }
}

// A function for accepting data (via 'state', should be called 'propValue'
// or 'providerData') to be injected into the React Component as a property.
// Redux Provider will take data in store (recall its populated by reducers)
// and inject into this contianer via this function,
// which will inject into the React component inside this Container
//
function mapStateToProps(state) {
  console.log('Content.mapStateToProps() state: ' + JSON.stringify(state));
  return {
    contentProp: state.contentData
  };
}


function matchDispatchToProps(dispatch) {
  console.log('Content.matchDispatchToProps() dispath: ' + JSON.stringify(dispatch));
  return bindActionCreators({
    addNewContent: addNewContentActionCreator
  }, dispatch);
}



// Export a Redux Container (which is basically a React Component
// with a function that allows injection of data as a component prop)
//
export default connect(mapStateToProps, matchDispatchToProps)(Content);
