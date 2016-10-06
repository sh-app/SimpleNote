import React from 'react';
import Sidebar from './sidebar';
import Note from '../notes/note';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
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
