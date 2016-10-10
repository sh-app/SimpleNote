import { RECEIVE_NOTE, RECEIVE_ALL_NOTES, RECEIVE_ERRORS } from '../actions/note_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentNote: {},
  allNotes: []
};


const NoteReducer = (state=defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALL_NOTES:
      return merge({}, defaultState, {allNotes: action.notes});

    case RECEIVE_NOTE:
      const noteIds = state.allNotes.map(note => (note.id));
      let allNotes;

      if (noteIds.includes(action.note.id)) {
        allNotes = state.allNotes.map(note => {
          return note.id === action.note.id ? action.note : note;
        });
      } else {
        allNotes = state.allNotes;
        allNotes.push(action.note);
      }

      return merge({}, state, {currentNote: action.note, allNotes});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    default:
      return state;

  }
};

export default NoteReducer;
