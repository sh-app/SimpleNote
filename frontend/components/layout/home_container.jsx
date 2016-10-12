import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { getAllNotes, clearCurrentNote } from '../../actions/note_actions';
import { getAllNotebooks, clearCurrentNotebook } from '../../actions/notebook_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getAllNotes: () => dispatch(getAllNotes()),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  clearCurrentNotebook: () => dispatch(clearCurrentNotebook()),
  clearCurrentNote: () => dispatch(clearCurrentNote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Home);
