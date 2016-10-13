import React from 'react';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNotesIndex() {
    this.props.clearCurrentNotebook();
    this.props.clearCurrentNote();
    this.props.getAllNotes();
  }

  render() {
    return(
      <nav className='sidebar'>
        <ul className=''>

        <li><Link to='/notes' onClick = {this.handleNotesIndex.bind(this)}>
          <i className="fa fa-pencil-square-o fa-3x" aria-hidden="true"></i>
        </Link></li>

        <li><Link to='/notes' onClick = {this.handleNotesIndex.bind(this)}>
          <i className="fa fa-sticky-note fa-3x" aria-hidden="true"></i>
          </Link></li>

        <li><Link to='/notebooks'>
          <i className="fa fa-book fa-3x" aria-hidden="true"></i>
        </Link></li>

        <li><Link to='/tags'>
          <i className="fa fa-tags fa-3x" aria-hidden="true"></i>
        </Link></li>

        </ul>
      </nav>
  );
  }
}
