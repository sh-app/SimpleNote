import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { getAllNotes, receiveNote } from '../../actions/note_actions';
import { getAllNotebooks, receiveNotebook } from '../../actions/notebook_actions';
import { getAllTags } from '../../actions/tag_actions';

const mapStateToProps = ({session, notebooks}) => ({
  currentUser: session.currentUser,
  currentNotebook: notebooks.currentNotebook
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getAllNotes: () => dispatch(getAllNotes()),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  getAllTags: () => dispatch(getAllTags()),
  receiveNotebook: (notebook) => dispatch(receiveNotebook(notebook)),
  receiveNote: (note) => dispatch(receiveNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Home);
