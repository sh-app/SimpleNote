import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { getAllNotes } from '../../actions/note_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getAllNotes: () => dispatch(getAllNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Home);
