import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import NoteMiddleware from './note_middleware';
import NotebookMiddleware from './notebook_middleware';
import createLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  NoteMiddleware,
  NotebookMiddleware,
  createLogger()
);

export default RootMiddleware;
