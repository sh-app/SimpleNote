import { connect } from 'react-redux';
import NoteIndex from './noteindex';
import { receiveNote, getAllNotes } from '../../actions/note_actions'
import { getAllNotebooks } from '../../actions/notebook_actions';


const mapStateToProps = ({notes, notebooks}) => {
  let allNotes;
    if (notebooks.currentNotebook.id) {
      allNotes = notebooks.currentNotebook.notes;
    } else {
      allNotes = notes.allNotes;
    }

  return {
  allNotes,
  currentNote : notes.currentNote,
  currentNotebook : notebooks.currentNotebook
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllNotes: () => dispatch(getAllNotes()),
  receiveNote: (note) => dispatch(receiveNote(note)),
  getAllNotebooks: () => dispatch(getAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
