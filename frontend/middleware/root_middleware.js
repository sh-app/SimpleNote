import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import NoteMiddleware from './note_middleware';
import createLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  NoteMiddleware,
  createLogger()
);

export default RootMiddleware;
