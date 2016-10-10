import {
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  GET_NOTE,
  GET_ALL_NOTES,
  receiveNote,
  getAllNotes,
  receiveAllNotes,
  receiveErrors
} from '../actions/note_actions';

import { create, edit, destroy, getNote, getNotes } from '../util/notes_api_util';

const NoteMiddleware = ({ getState, dispatch }) => next => action => {

  const error = (error) => dispatch(receiveErrors(error.responseJSON))

  switch (action.type) {

    case CREATE_NOTE:
      create(action.note, (note) => dispatch(receiveNote(note)), error);
      return next(action);

    case EDIT_NOTE:
      edit(action.note, (note) => dispatch(receiveNote(note)), error);
      return next(action);

    case DELETE_NOTE:
      destroy(action.note_id, () => dispatch(getAllNotes()), error);
      return next(action);

    case GET_NOTE:
      getNote(action.id, (note) => dispatch(receiveNote(note)), error);
      return next(action);

    case GET_ALL_NOTES:
      getNotes((notes) => dispatch(receiveAllNotes(notes)), error);
      return next(action);

    default:
      return next(action);

  }
};

export default NoteMiddleware;
