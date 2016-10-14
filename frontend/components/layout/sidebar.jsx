import React from 'react';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNewNote() {
    this.props.receiveNote({
      title: "",
      body: "",
      id: null,
      notebook_id: this.props.currentNotebook.id
    });
  }

  handleNotesIndex() {
    this.props.receiveNotebook({});
    this.props.receiveNote({
      title: "",
      body: "",
      id: null,
      notebook_id: null
    });
  }

  handleNotebooksIndex() {
    this.props.receiveNotebook({});
    this.props.receiveNote({
      title: "",
      body: "",
      id: null,
      notebook_id: null
    });
  }

  render() {
    return(
      <nav className='sidebar'>
        <ul className=''>

        <li><Link to='/notes' onClick = {this.handleNewNote.bind(this)}>
          <i className="fa fa-pencil-square-o fa-3x" aria-hidden="true"></i>
        </Link></li>

        <li><Link to='/notes' onClick = {this.handleNotesIndex.bind(this)}>
          <i className="fa fa-sticky-note fa-3x" aria-hidden="true"></i>
          </Link></li>

        <li><Link to='/notebooks' onClick = {this.handleNotebooksIndex.bind(this)}>
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
