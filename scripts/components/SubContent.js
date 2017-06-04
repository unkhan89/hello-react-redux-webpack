
import React from 'react';
import ReactDOM from 'react-dom';

// A component is "some component on a website, gernerally speaking"
// Aka React Class, it baslically results in a custom html tag and an instanciable object,
// to which params can be passed by via xml attributes
// React.createClass() will be deprecated in v6 and a JS class shoudl be used instead

class SubContent extends React.Component {
  render() {
    console.log('SubContent.render() subContentId: ' + this.props.subContentId);
    return (
      <div id={this.props.subContentId} className="SubContent">
        <p>A sub content component: {this.props.children}</p>
      </div>
    );
  }
}

export default SubContent;
