import { connect } from 'react-redux';
import SessionForm from './sessionform';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors || []
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType;
  let submitForm;

  if (ownProps.location) {
    formType = ownProps.location.pathname.slice(1) || 'signup';
  } else {
    formType = '/';
  }

  if (formType === 'signup') {
      submitForm = signup;
  } else {
      submitForm = login;
  }

  return {
    submitForm: (user) => dispatch(submitForm(user)),
    formType,
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
