import React from 'react';
import Sidebar from './sidebar';
import Note from '../notes/note';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.redirect();
  }

  redirect(){
    debugger
    if (!this.props.session) {
      hashHistory.push("/");
    }
  }

  render() {
    return(
      <div>
        <Sidebar />
        <Note />
      </div>
    );
  }
}
