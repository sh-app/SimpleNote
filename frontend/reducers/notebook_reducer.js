import {
  RECEIVE_NOTEBOOK,
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_ERRORS,
  CLEAR_CURRENT_NOTEBOOK
  } from '../actions/notebook_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentNotebook: {},
  allNotebooks: []
};


const NotebookReducer = (state=defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALL_NOTEBOOKS:
      return merge({}, state, {allNotebooks: action.notebooks});

    case RECEIVE_NOTEBOOK:
      const notebookIds = state.allNotebooks.map(notebook => (notebook.id));
      let allNotebooks;

      if (notebookIds.includes(action.notebook.id)) {
        allNotebooks = state.allNotebooks.map(notebook => {
          return notebook.id === action.notebook.id ? action.notebook : notebook;
        });
      } else {
        allNotebooks = state.allNotebooks;
        allNotebooks.push(action.notebook);
      }

      return Object.assign({}, state, {currentNotebook: action.notebook, allNotebooks});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    case CLEAR_CURRENT_NOTEBOOK:
      return Object.assign({}, state, {currentNotebook: {}});

    default:
      return state;

  }
};

export default NotebookReducer;
