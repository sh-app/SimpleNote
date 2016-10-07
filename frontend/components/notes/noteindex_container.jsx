import { connect } from 'react-redux';
import NoteIndex from './noteindex';
import { createNote, editNote, deleteNote, getNote, getAllNotes } from '../../actions/note_actions'

const mapStateToProps = ({notes}) => ({
  allNotes : notes.allNotes,
  currentNote : notes.currentNote
});

const mapDispatchToProps = (dispatch) => ({
  getAllNotes: (author_id) => dispatch(getAllNotes(author_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
