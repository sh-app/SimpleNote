import {
  CREATE_NOTEBOOK,
  EDIT_NOTEBOOK,
  DELETE_NOTEBOOK,
  GET_NOTEBOOK,
  GET_ALL_NOTEBOOKS,
  receiveNotebook,
  getAllNotebooks,
  receiveAllNotebooks,
  receiveErrors
} from '../actions/notebook_actions';

import { create, edit, destroy, getNotebook, getNotebooks } from '../util/notebooks_api_util';

const NotebookMiddleware = ({ getState, dispatch }) => next => action => {

  const error = (error) => dispatch(receiveErrors(error.responseJSON))

  switch (action.type) {

    case CREATE_NOTEBOOK:
      create(action.notebook, (notebook) => dispatch(receiveNotebook(notebook)), error);
      return next(action);

    case EDIT_NOTEBOOK:
      edit(action.notebook, (notebook) => dispatch(receiveNotebook(notebook)), error);
      return next(action);

    case DELETE_NOTEBOOK:
      destroy(action.notebook_id, () => dispatch(getAllNotebooks()), error);
      return next(action);

    case GET_NOTEBOOK:
      getNotebook(action.id, (notebook) => dispatch(receiveNotebook(notebook)), error);
      return next(action);

    case GET_ALL_NOTEBOOKS:
      getNotebooks((notebooks) => dispatch(receiveAllNotebooks(notebooks)), error);
      return next(action);

    default:
      return next(action);

  }
};

export default NotebookMiddleware;
