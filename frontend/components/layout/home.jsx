import React from 'react';
import Sidebar from './sidebar';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUnMount() {
    //clean up after logout
    //clean up container
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
          getAllNotes = {this.props.getAllNotes}
          currentNotebook={this.props.currentNotebook}/>
        {this.props.children}
      </div>
    );
  }
}
