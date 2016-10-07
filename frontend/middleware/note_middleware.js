import {
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  receiveNote,
  getAllNotes,
  receiveErrors
} from '../actions/note_actions';

import { create, edit, destroy } from '../util/notes_api_util';

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
      let note_id = action.note.id;
      let author_id = action.note.author_id;
      destroy(note_id, (author_id) => dispatch(receiveAllNotes(author_id)), error);
      return next(action);

    default:
      return next(action);

  }
};

export default NoteMiddleware;
