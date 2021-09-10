import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../css/EditModal.css';
const server = process.env.REACT_APP_HEROKU_URL;



class EditModal extends Component {

  handleDeleteClick = async () => {
    await axios.delete(`${server}/restaurants/${this.props.selectedRestaurant._id}`);
    this.props.handleGet();
    this.props.onClose();
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">{this.props.selectedRestaurant.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button id="editModelDelete" onClick={this.handleDeleteClick}>DELETE RESTAURANT?</Button>

          </Modal.Body>
          <Modal.Footer>
            <Button id="modalButton" onClick={this.props.onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(EditModal);
