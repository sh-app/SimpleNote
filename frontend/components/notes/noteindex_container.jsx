import { connect } from 'react-redux';
import NoteIndex from './noteindex';
import { getNote, getAllNotes } from '../../actions/note_actions'

const mapStateToProps = ({notes}) => ({
  allNotes : notes.allNotes,
  currentNote : notes.currentNote
});

const mapDispatchToProps = (dispatch) => ({
  getAllNotes: () => dispatch(getAllNotes()),
  getNote: (note_id) => dispatch(getNote(note_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
