import React from 'react';
import NotebookIndexItem from './notebookindexitem';
import NoteContainer from '../notes/note_container';

export default class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotebooks();
  }

  render() {
    this.notebooks = this.props.allNotebooks.map(notebook =>
      <NotebookIndexItem notebook={notebook} receiveNotebook = {this.props.receiveNotebook} key={notebook.id} />
    );

    if (this.notebooks) {
      return(
        <div>
          <div className='mini-menu'>
            <h2>Notebooks</h2>
            <ul className='note-index'>{this.notebooks}</ul>
          </div>
          <NoteContainer />
        </div>
      );
    } else {
      return (<p className='note-loading'>'Loading notes...'</p>);
    }
  }

}
