import React from 'react';
import NoteIndexItem from './noteindexitem';
import NoteContainer from './note_container';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllNotes();
  }

  render() {
    console.log("index render");
    this.notes = this.props.allNotes.map(note =>
      <NoteIndexItem
        note={note}
        currentNotebook={this.props.currentNotebook}
        receiveNote = {this.props.receiveNote}
        getNotebook = {this.props.getNotebook}
        key={note.id} />
    );

    this.title = (this.props.currentTag.name || this.props.currentNotebook.title) || "Recent Notes";

    return(
      <div>
        <div className='mini-menu'>
          <h2>{this.title}</h2>
          <ul className='note-index'>{this.notes}</ul>
        </div>
        <NoteContainer/>
      </div>
    );
  }

}
