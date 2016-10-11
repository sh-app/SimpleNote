import React from 'react';
import NoteIndexItem from './noteindexitem';
import NoteContainer from './note_container';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.notes = this.props.allNotes.map(note =>
      <NoteIndexItem note={note} receiveNote = {this.props.receiveNote} key={note.id} />
    );
    const title = this.props.currentNotebook.title || "Recent Notes";

    if (this.notes) {
      return(
        <div>
          <div className='mini-menu'>
            <h2>{title}</h2>
            <ul className='note-index'>{this.notes}</ul>
          </div>
          <NoteContainer />
        </div>
      );
    } else {
      return (<p className='note-loading'>'Loading notes...'</p>);
    }
  }

}
