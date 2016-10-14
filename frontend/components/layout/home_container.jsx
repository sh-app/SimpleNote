import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { getAllNotes, receiveAllNotes, receiveNote } from '../../actions/note_actions';
import { getAllNotebooks, receiveAllNotebooks, receiveNotebook } from '../../actions/notebook_actions';
import { getAllTags, receiveAllTags, receiveTag } from '../../actions/tag_actions';

const mapStateToProps = ({session, notebooks}) => ({
  currentUser: session.currentUser,
  currentNotebook: notebooks.currentNotebook
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getAllNotes: () => dispatch(getAllNotes()),
  receiveAllNotes: (notes) => dispatch(receiveAllNotes(notes)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  receiveAllNotebooks: (notebooks) => dispatch(receiveAllNotebooks(notebooks)),
  getAllTags: () => dispatch(getAllTags()),
  receiveAllTags: (tags) => dispatch(receiveAllTags(tags)),
  receiveNotebook: (notebook) => dispatch(receiveNotebook(notebook)),
  receiveNote: (note) => dispatch(receiveNote(note)),
  receiveTag: (tag) => dispatch(receiveTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Home);
