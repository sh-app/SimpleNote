import { connect } from 'react-redux';
import Note from './note';
import { createNote, editNote, deleteNote } from '../../actions/note_actions'

const mapStateToProps = ({notes}) => ({
  currentNote: notes.currentNote
});

const mapDispatchToProps = (dispatch) => ({
  create: (note) => dispatch(createNote(note)),
  save: (note) => dispatch(editNote(note)),
  deleteNote: (note_id) => dispatch(deleteNote(note_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
