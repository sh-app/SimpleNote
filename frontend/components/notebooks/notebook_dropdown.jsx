import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal-style';
import NotebookCreate from './notebook_create';

export default class NotebookDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state= { selected: null, createNotebook: false };

    this.handleChange =this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({createNotebook: true});
  }

  closeModal() {
    this.setState({createNotebook: false});
  }

  handleChange(field) {
    return (e) => {
      if (e.target.value==="new-notebook") {
        this.openModal();
      } else {
        this.props.getNotebook(e.target.value);
      }
    };
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
  }

  render() {
     this.notebookList = this.props.notebooks.map(notebook =>
    <option value={notebook.id} key={notebook.id}>{notebook.title}</option>);

    this.notebookList.unshift(<option value={"new-notebook"}>New notebook</option>);
    this.notebookList.unshift(<option value={"select-notebook"}>Select notebook</option>);

    return (
      <select name="notebook_id"
        defaultValue={this.props.currentNotebook.id || "select-notebook"}
        onChange={this.handleChange("selected")}>
        {this.notebookList}
        <Modal
        isOpen={this.state.createNotebook}
        onRequestClose={this.closeModal}
        style={ModalStyle}>
          <NotebookCreate
            create={this.props.createNotebook}
            closeModal={this.closeModal}
            getNotebook={this.props.getNotebook}/>
        </Modal>
      </select>
    );
  }
}
