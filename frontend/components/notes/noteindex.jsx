import React from 'react';
import NoteIndexItem from './noteindexitem';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotes();
  }

  render() {
    this.userNotes = this.props.allNotes.map(note =>
      <NoteIndexItem noteDetails={note} getNote = {this.props.getNote} key={note.id} />
    );

    if (this.userNotes) {
      return(
        <div>
          <h2>Recent Notes</h2>
          <ul className='note-index'>{this.userNotes}</ul>
        </div>
      );
    } else {
      return (<p className='note-loading'>'Loading notes...'</p>);
    }
  }

}



/// fake auto save
// handleChange() {
//   if (this.timeOut) {
//     clearTimeout(this.timeOut);
//   }
//
//   this.timeOut = setTimeout(() => {
//     apiUtil.saveThing();
//   }, 750)
// }
