import { RECEIVE_NOTE, RECEIVE_ALL_NOTES, RECEIVE_ERRORS } from '../actions/note_actions';
import merge from 'lodash/merge';

const NoteReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALL_NOTES:
      return action.notes;

    case RECEIVE_NOTE:
      let singleNote = action.note;
      return merge({}, state, singleNote, {currentNote: action.note});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    default:
      return state;

  }
};

export default NoteReducer;
