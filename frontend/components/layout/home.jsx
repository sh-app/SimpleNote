import React from 'react';
import Sidebar from './sidebar';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllNotes();
  }

  componentWillUnMount() {
    //clean up after logout
  }

  componentDidUpdate() {
    this.redirect();
  }

  redirect(){
    if (!this.props.currentUser) {
      hashHistory.push("/");
    }
  }

  render() {
    return(
      <div className ='content-container group'>
        <Sidebar
          clearCurrentNotebook={this.props.clearCurrentNotebook}
          clearCurrentNote={this.props.clearCurrentNote}
          getAllNotes = {this.props.getAllNotes}/>
        {this.props.children}
      </div>
    );
  }
}
