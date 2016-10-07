export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const GET_NOTE = 'GET_NOTE';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const createNote = (note) => ({
  type: CREATE_NOTE,
  note
});

export const editNote = (note) => ({
  type: CREATE_NOTE,
  note
});

export const deleteNote = (note_id) => ({
  type: DELETE_NOTE,
  note
});

export const getAllNotes = (user_id) => ({
  type: GET_ALL_NOTES,
});

export const getNote = (id) => ({
  type: GET_NOTE,
  id
});

export const receiveAllNotes = (notes) => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
