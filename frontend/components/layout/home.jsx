import React from 'react';
import Sidebar from './sidebar';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUnMount() {
    this.props.receiveNote(null);
    this.props.receiveNotebook(null);
    this.props.receiveAllNotes(null);
    this.props.receiveAllNotebooks(null);
    this.props.receiveAllTags(null);
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
          receiveNotebook={this.props.receiveNotebook}
          receiveNote={this.props.receiveNote}
          receiveTag={this.props.receiveTag}
          getAllNotes = {this.props.getAllNotes}
          currentNotebook={this.props.currentNotebook}/>
        {this.props.children}
      </div>
    );
  }
}
