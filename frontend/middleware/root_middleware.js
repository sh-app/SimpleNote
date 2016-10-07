import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import NoteMiddleware from './note_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  NoteMiddleware
);

export default RootMiddleware;
