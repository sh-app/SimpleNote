import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal-style';
import NotebookIndexItem from './notebookindexitem';
import NotebookCreate from './notebook_create';
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

  componentWillMount() {
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
        receiveNotebook = {this.props.receiveNotebook}
        key={notebook.id} />
    );

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
                style={ModalStyle}
                onRequestClose={this.closeModal}>
                  <NotebookCreate
                    create={this.props.create}
                    closeModal={this.closeModal}
                    getNotebook={this.props.getNotebook}/>
            </Modal>
          </div>

          <ul className='note-index'>{this.notebooks}</ul>
        </div>
        <NoteContainer/>
      </div>
    );
  }

}
