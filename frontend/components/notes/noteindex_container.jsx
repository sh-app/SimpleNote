import { connect } from 'react-redux';
import NoteIndex from './noteindex';
import { receiveNote, getAllNotes } from '../../actions/note_actions'

const mapStateToProps = ({notes}) => ({
  allNotes : notes.allNotes,
  currentNote : notes.currentNote
});

const mapDispatchToProps = (dispatch) => ({
  getAllNotes: () => dispatch(getAllNotes()),
  receiveNote: (note) => dispatch(receiveNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
