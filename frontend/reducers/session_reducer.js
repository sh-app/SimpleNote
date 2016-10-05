import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state=defaultSession, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState =  merge({}, state, {errors: action.errors});
      return newState;

    case RECEIVE_CURRENT_USER:
      newState =  merge({}, state, {currentUser: action.user});
      return newState;

    case LOGOUT:
      newState = defaultSession;
      return newState;

    default:
      return state;

  }
};

export default SessionReducer;
