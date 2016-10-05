import { connect } from 'react-redux';
import Header from './header.jsx';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors
})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
