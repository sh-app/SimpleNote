import { connect } from 'react-redux';
import Note from './note';
import { createNotebook, getNotebook, getAllNotebooks } from '../../actions/notebook_actions'
import { createNote, editNote, deleteNote } from '../../actions/note_actions'

const mapStateToProps = ({notes, notebooks}) => ({
  currentNote: notes.currentNote,
  allNotebooks: notebooks.allNotebooks,
  currentNotebook: notebooks.currentNotebook
});

const mapDispatchToProps = (dispatch) => ({
  create: (note) => dispatch(createNote(note)),
  save: (note) => dispatch(editNote(note)),
  deleteNote: (note_id) => dispatch(deleteNote(note_id)),
  getNotebook: (notebook_id) => dispatch(getNotebook(notebook_id)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
