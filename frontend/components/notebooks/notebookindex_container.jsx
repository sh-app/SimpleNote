import { connect } from 'react-redux';
import NotebookIndex from './notebookindex';
import { createNotebook, receiveNotebook, getAllNotebooks, getNotebook } from '../../actions/notebook_actions'
import { receiveAllNotes } from '../../actions/note_actions'

const mapStateToProps = ({notebooks}) => ({
  allNotebooks : notebooks.allNotebooks,
  currentNotebook : notebooks.currentNotebook
});

const mapDispatchToProps = (dispatch) => ({
  create: (notebook) => dispatch(createNotebook(notebook)),
  getNotebook: (notebook_id) => dispatch(getNotebook(notebook_id)),
  receiveNotebook: (notebook) => dispatch(receiveNotebook(notebook)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  receiveAllNotes: (notes) => dispatch(receiveAllNotes(notes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
