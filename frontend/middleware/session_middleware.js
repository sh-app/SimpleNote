import { SIGNUP,
  LOGIN,
  LOGOUT,
  receiveErrors,
  receiveCurrentUser } from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';

const SessionMiddleware =({ getState, dispatch }) => next => action => {

  const success = (user) => dispatch(receiveCurrentUser(user))
  const error = (error) => dispatch(receiveErrors(error.responseJSON))

  switch (action.type) {

    case SIGNUP:
      signup(action.user, success, error);
      return next(action);

    case LOGIN:
      login(action.user, success, error);
      return user(action);

    case LOGOUT:
      logout(() => dispatch(logout()), error);
      return user(action);

    default:
      return next(action);

  }
};

export default SessionMiddleware;
