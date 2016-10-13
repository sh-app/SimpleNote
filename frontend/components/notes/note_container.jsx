import { connect } from 'react-redux';
import Note from './note';
import { createNotebook, getNotebook, getAllNotebooks } from '../../actions/notebook_actions'
import { createNote, editNote, deleteNote } from '../../actions/note_actions'
import { createTag, removeTag, getAllTags } from '../../actions/tag_actions';

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
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  createTag: (tag) => dispatch(createTag(tag)),
  removeTag: (tag) => dispatch(createTag(tag)),
  getAllTags: () => dispatch(getAllTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
