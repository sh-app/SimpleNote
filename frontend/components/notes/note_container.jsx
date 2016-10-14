import { connect } from 'react-redux';
import Note from './note';
import { createNotebook, getNotebook, getAllNotebooks, receiveNotebook } from '../../actions/notebook_actions';
import { getNote, createNote, editNote, deleteNote, setNotebookId, receiveNote } from '../../actions/note_actions';
import { createTag, removeTag, receiveTag, getAllTags } from '../../actions/tag_actions';

const mapStateToProps = ({notes, notebooks, tags}) => ({
  currentNote: notes.currentNote,
  allNotebooks: notebooks.allNotebooks,
  currentNotebook: notebooks.currentNotebook,
  allTags: tags.allTags
});

const mapDispatchToProps = (dispatch) => ({
  create: (note) => dispatch(createNote(note)),
  save: (note) => dispatch(editNote(note)),
  deleteNote: (note_id) => dispatch(deleteNote(note_id)),
  getNotebook: (notebook_id) => dispatch(getNotebook(notebook_id)),
  getNote: (note_id) => dispatch(getNote(note_id)),
  receiveNote: (note) => dispatch(receiveNote(note)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  setNotebookId: (notebook_id) => dispatch(setNotebookId(notebook_id)),
  createTag: (tag) => dispatch(createTag(tag)),
  removeTag: (tag) => dispatch(removeTag(tag)),
  getAllTags: () => dispatch(getAllTags()),
  receiveTag: (tag) => dispatch(receiveTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
