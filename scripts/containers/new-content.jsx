
import React from 'react';
import {connect} from 'react-redux';


class NewContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('NewContent.render()');
    console.log('> props: ' + JSON.stringify(this.props));
    console.log('> state: ' + JSON.stringify(this.state));

    if(this.props.newContent) {

      return(
        <div id="NewContent">
          <h3>New content:</h3>
          <p>{this.props.newContent}</p>
        </div>
      );

    } else {

      return(
        <div id="NewContent">
          <h3>No new content yet</h3>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log('NewContent.mapStateToProps() state: ' + JSON.stringify(state));
  return {
    newContent: state.newContentData
  };
}

export default connect(mapStateToProps)(NewContent);
