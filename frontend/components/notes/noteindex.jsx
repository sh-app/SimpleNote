import React from 'react';

export default class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userNotes = this.props.notes.map( (note) => (
      <NoteIndexItem noteDetails = {note} key = {note.id} />)
    );

    return(  <div>
        {JSON.stringify(this.props.notes)}
      </div>
    );
  }

}
