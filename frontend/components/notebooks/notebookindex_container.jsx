import { connect } from 'react-redux';
import NotebookIndex from './notebookindex';
import { receiveNotebook, getAllNotebooks } from '../../actions/notebook_actions'

const mapStateToProps = ({notebooks}) => ({
  allNotebooks : notebooks.allNotebooks,
  currentNotebook : notebooks.currentNotebook
});

const mapDispatchToProps = (dispatch) => ({
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  receiveNotebook: (notebook) => dispatch(receiveNotebook(notebook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
