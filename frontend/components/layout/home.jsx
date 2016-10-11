import React from 'react';
import Sidebar from './sidebar';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
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
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}
