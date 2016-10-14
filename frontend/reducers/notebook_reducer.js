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
      let notebooks;

      if (notebookIds.includes(action.notebook.id)) {
        notebooks = state.allNotebooks.map(notebook => {
          return notebook.id === action.notebook.id ? action.notebook : notebook;
        });
      } else if (action.notebook.id) {
        notebooks = state.allNotebooks;
        notebooks.push(action.notebook);
      } else {
        notebooks = state.allNotebooks;
      }
       return Object.assign({}, state, {allNotebooks: notebooks, currentNotebook: action.notebook});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    case CLEAR_CURRENT_NOTEBOOK:
      return Object.assign({}, state, {currentNotebook: {}});

    default:
      return state;

  }
};

export default NotebookReducer;
