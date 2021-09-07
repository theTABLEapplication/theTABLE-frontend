import { Component } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class AddRestaurant extends Component {
  render() {
    return (
      <>
        <p>'ello</p>
        <Modal show={this.props.show} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add A Restaurant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Exit (temp)</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddRestaurant;
