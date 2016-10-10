import React from 'react';
import Sidebar from './sidebar';
import NoteContainer from '../notes/note_container';
import NoteIndexContainer from '../notes/noteindex_container';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.redirect();
  }

  redirect(){
    if (!this.props.session) {
      hashHistory.push("/");
    }
  }

  render() {
    return(
      <div className ='content-container group'>
        <Sidebar />
        <div className='mini-menu'>{this.props.children}</div>
        <NoteContainer />
      </div>
    );
  }
}
