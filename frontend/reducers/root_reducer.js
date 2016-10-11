import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NoteReducer from './note_reducer';
import NotebookReducer from './notebook_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  notes: NoteReducer,
  notebooks: NotebookReducer
});

export default RootReducer;
