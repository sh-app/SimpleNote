import {
  RECEIVE_NOTE,
  RECEIVE_ALL_NOTES,
  RECEIVE_ERRORS,
  SET_NOTEBOOK_ID
  } from '../actions/note_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentNote: {},
  allNotes: []
};


const NoteReducer = (state=defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALL_NOTES:
      return merge({}, state, {allNotes: action.notes});

    case RECEIVE_NOTE:
      const noteIds = state.allNotes.map(note => (note.id));
      let notes;

      if (noteIds.includes(action.note.id)) {
        notes = state.allNotes.map(note => (
          note.id === action.note.id ? action.note : note )
        );
      } else if (action.note.id) {
        notes = state.allNotes;
        notes.push(action.note);
      } else {
        notes = state.allNotes;
      }
      return Object.assign({}, state, {allNotes: notes, currentNote: action.note});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    case SET_NOTEBOOK_ID:
      let a = merge({}, state, {currentNote: {notebook_id: action.notebook_id}});
      debugger
      return merge({}, state, {currentNote: {notebook_id: action.notebook_id}});

    default:
      return state;

  }
};

export default NoteReducer;
