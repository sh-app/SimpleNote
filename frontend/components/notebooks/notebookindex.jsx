import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import NotebookIndexItem from './notebookindexitem';
import NoteContainer from '../notes/note_container';

export default class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createNotebook: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.getAllNotebooks();
  }

  openModal() {
    this.setState({createNotebook: true});
  }

  closeModal() {
    this.setState({createNotebook: false});
  }

  render() {
    this.notebooks = this.props.allNotebooks.map(notebook =>
      <NotebookIndexItem
        notebook={notebook}
        receiveAllNotes = {this.props.receiveAllNotes}
        receiveNotebook = {this.props.receiveNotebook}
        key={notebook.id} />
    );

    if (this.notebooks) {
      return(
        <div>
          <div className='mini-menu'>
            <h2>Notebooks</h2>
            <div className='mini-panel'
              onClick ={this.openModal}>
                <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                <p>New Notebook</p>
                <Modal
                  isOpen={this.state.createNotebook}
                  onRequestClose={this.closeModal}>
                    <p closeModal={this.closeModal}>
                      Create a notebook component here
                    </p>
              </Modal>
            </div>
            <ul className='note-index'>{this.notebooks}</ul>
          </div>
          <NoteContainer />
        </div>
      );
    } else {
      return (<p className='note-loading'>'Loading notes...'</p>);
    }
  }

}
