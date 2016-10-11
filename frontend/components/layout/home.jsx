import React from 'react';
import Sidebar from './sidebar';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotes();
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
        <Sidebar getAllNotes = {this.props.getAllNotes}/>
        {this.props.children}
      </div>
    );
  }
}
