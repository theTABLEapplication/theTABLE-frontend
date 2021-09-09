import { withAuth0 } from '@auth0/auth0-react';
import { Component } from 'react';
// import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

class MealModal extends Component {

  handleMealSubmit = async (event) => {
    event.preventDefault();
    let mealObj = {
      name: event.target[0].value,
      like: event.target[1].checked,
      photo: event.target[2].value,
    };
    this.props.handleMealSubmit(mealObj);
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">{this.props.selectedMealRestaurant.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleMealSubmit}>
              <Form.Group className="mb-3" controlId="formMeal">
                <Form.Control type="text" placeholder="What Did You Eat?" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRecommend">
                <Form.Check type="checkbox" label="Recommend?" />
              </Form.Group>
              <Button type="submit">ADD</Button>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button id="modalButton" onClick={this.props.onClose}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

export default withAuth0(MealModal);
