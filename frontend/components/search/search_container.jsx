import { connect } from 'react-redux';
import Search from './search';
import { getAllNotebooks, getNotebook } from '../../actions/notebook_actions';
import { getAllNotes, getNote } from '../../actions/note_actions';

const mapStateToProps = ({notes, notebooks}) => ({
  allNotebooks: notebooks.allNotebooks,
  allNotes: notes.allNotes,
});

const mapDispatchToProps = (dispatch) => ({
  getNotebook: (notebook_id) => dispatch(getNotebook(notebook_id)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  getNote: (note_id) => dispatch(getNote(note_id)),
  getAllNotes: () => dispatch(getAllNotes()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
