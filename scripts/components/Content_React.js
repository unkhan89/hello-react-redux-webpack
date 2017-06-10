/**
 *  REACT ONLY, for redux, ContentX component
 *
 */


import React from 'react';
import ReactDOM from 'react-dom';

import SubContent from './SubContent.js';

// A component is "some component on a website, gernerally speaking"
// Aka React Class, it baslically results in a custom html tag and an instanciable object,
// to which params can be passed by via xml attributes
// React.createClass() will be deprecated in v6 and a JS class shoudl be used instead

class ContentComponent extends React.Component 		// createClass() is passed a JS module from what it looks like
{
  constructor(props) {    // needed?
    super(props);
    this.state = {
      stateVar1 : 'foo',
      stateVar2 : 'bar'
    };
    this.doSomething = this.doSomething.bind(this);
    this.updateStateVar1 = this.updateStateVar1.bind(this);
    this.getState = this.getState.bind(this);
  }

  // requied function that returns some html
  // must return html, not as a string, can inject properties via JSX
  // expressions are denoted in {}
  // Note: xml attributes that involve expression must not be in quotes!
  render() {
    console.log('ContentComponent.render() Enter');
    console.log('Props: ' + JSON.stringify(this.props));

    var currentState = this.getState();
    var stateSpanId = this.props.contentId + '-state';

    // instead of giving unique IDs to elements of this component, you
    // can simply assign a "ref", instead of this:
    // var inputStateVar1Id = this.props.contentId + '-state-var-1';
    // <input type="text" id={inputStateVar1Id} />

    // what is returned can be conditional per component's state
    // eg: a user click on "edit" button > state.editing=true > render() returns editing form

    // Note: parent component can also pass a reference to one of its functions
    // via a property when instanciating a child component

    return (
      <div id="{this.props.contentId}" className="Content">
        <p>Some content for "{this.props.contentId}" goes here.</p>
        <p>Recived "arg1" as a property from renderer: {this.props.arg1}</p>
        <p>Recived "var1" as a property from renderer: {this.props.var1}</p>
        <button onClick={this.doSomething}>Do Something with {this.props.contentId}!</button>
        <p id="{this.props.contentId}-childContent">Child content for this: {this.props.children}</p>
        <p>
          Set current state var 1: <input type="text" ref="stateVar1Input" />
          &nbsp;<button onClick={this.updateStateVar1}>Update</button>
        </p>
        <p>Current state: <span id={stateSpanId} >{currentState}</span></p>
        <div id="subContent">
          {
            this.props.subContent.map(function(aSubContent, index) {
              var key = 'subContent-' + index;
              return (<SubContent key={key} subContentId={index}> {aSubContent} </SubContent>);
            })
          }
        </div>
      </div>
    );
  }

  // Component can have functions that can be invoked on events
  doSomething() {
    console.log('ContentComponent.doSomething() Enter');
    alert('Something was done for ' + this.props.contentId);
  }

  updateStateVar1() {
    console.log('Component.updateStateVar1() Enter, for ' + this.props.contentId);

    // Two ways of getting a components elements: by traditional ID (cumbersome) or by refs (React way)
    // var inputElementId = this.props.contentId + '-state-var-1';
    // console.log('Input to get from ID: ' + inputElementId);
    // console.log('Value in input ID: ' + document.getElementById(inputElementId).value);
    console.log('Value to set: ' + this.refs.stateVar1Input.value);

    console.log('Before state: ' + this.getState());

    // two ways of setting state (and again, two ways of getting a component's element value):
    // this.state.stateVar1 = document.getElementById(inputElementId).value;
    // this.setState({stateVar1: document.getElementById(inputElementId).value});
    this.setState({stateVar1: this.refs.stateVar1Input.value});
    console.log('After state: ' + this.getState());

    // No need for following, React handles re-rendering component (iow reacts to a change in state)
    // document.getElementById(this.props.contentId + '-state').innerHTML = this.getState();
  }

  getState() {
    console.log('Component.getStateVars() Enter, this.state: ' + JSON.stringify(this.state));
    return JSON.stringify(this.state);
  }

  // "state" is a collection of key-value pairs of mutable data for this component
  // getInitialState() must be implemented in order to define what state variables the component has
  // must return an object with keys as names of variables and values as default values
  // IF using React.createClass():
  //
  // getInitialState() {
  //   return {
  //     stateVar1 : 'foo',
  //     stateVar2 : 'bar'
  //   };
  // }
}

export default ContentComponent;
