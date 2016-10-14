import { connect } from 'react-redux';
import NoteIndex from './noteindex';
import { receiveNote, getAllNotes } from '../../actions/note_actions';
import { getAllNotebooks, getNotebook } from '../../actions/notebook_actions';

const mapStateToProps = ({notes, notebooks, tags}) => {
  let allNotes;
  if (tags.currentTag.id) {
    allNotes = tags.currentTag.notes;
  } else if (notebooks.currentNotebook.id) {
    allNotes = notebooks.currentNotebook.notes;
  } else {
    allNotes = notes.allNotes;
  }
  return {
    allNotes,
    currentTag: tags.currentTag,
    currentNotebook: notebooks.currentNotebook
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllNotes: () => dispatch(getAllNotes()),
  receiveNote: (note) => dispatch(receiveNote(note)),
  getNotebook: (notebook_id) => dispatch(getNotebook(notebook_id)),
  getAllNotebooks: () => dispatch(getAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
