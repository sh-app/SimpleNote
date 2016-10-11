import { connect } from 'react-redux';
import NoteIndex from './noteindex';
import { receiveNote, getAllNotes } from '../../actions/note_actions'

const mapStateToProps = ({notes, notebooks}) => ({
  allNotes : notes.allNotes,
  currentNote : notes.currentNote,
  currentNotebook : notebooks.currentNotebook
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllNotes: () => dispatch(getAllNotes()),
  receiveNote: (note) => dispatch(receiveNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
