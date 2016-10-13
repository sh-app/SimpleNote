import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NoteReducer from './note_reducer';
import NotebookReducer from './notebook_reducer';
import TagReducer from './tag_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  notes: NoteReducer,
  notebooks: NotebookReducer,
  tags: TagReducer
});

export default RootReducer;
