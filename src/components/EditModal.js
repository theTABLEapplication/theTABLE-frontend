import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';


class EditModal extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">{this.props.selectedRestaurant.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button>SUBTRACT VISIT</Button>
            <Button>DELETE</Button>
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
