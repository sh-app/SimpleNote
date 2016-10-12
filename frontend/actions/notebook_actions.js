export const CREATE_NOTEBOOK = 'CREATE_NOTEBOOK';
export const EDIT_NOTEBOOK = 'EDIT_NOTEBOOK';
export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK';
export const GET_ALL_NOTEBOOKS = 'GET_ALL_NOTEBOOKS';
export const GET_NOTEBOOK = 'GET_NOTEBOOK';
export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_CURRENT_NOTEBOOK = 'CLEAR_CURRENT_NOTEBOOK';

export const createNotebook = (notebook) => ({
  type: CREATE_NOTEBOOK,
  notebook
});

export const editNote = (notebook) => ({
  type: EDIT_NOTEBOOK,
  notebook
});

export const deleteNote = (notebook_id) => ({
  type: DELETE_NOTEBOOK,
  notebook_id
});

export const getAllNotebooks = () => ({
  type: GET_ALL_NOTEBOOKS,
});

export const getNotebook = (id) => ({
  type: GET_NOTEBOOK,
  id
});

export const receiveAllNotebooks = (notebooks) => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearCurrentNotebook = () => ({
  type: CLEAR_CURRENT_NOTEBOOK
});
