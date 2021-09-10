import { withAuth0 } from '@auth0/auth0-react';
import { Component } from 'react';
// import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/MealModal.css';

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
    console.log(this.props.mealArray);
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">{this.props.selectedMealRestaurant.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleMealSubmit}>
              <div id='modaltop'>
                <div id='modaltopform'>
                  <Form.Group className="mb-3" controlId="formMeal">
                    <Form.Control type="text" placeholder="What Did You Eat?" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formRecommend">
                    <Form.Check type="checkbox" label="LOVED THIS! 🤩" />
                  </Form.Group>
                </div>
                <Button id="addDishButton" type="submit">ADD</Button>
              </div>
            </Form>
            <div id='lovedmeals'>
              <p>MY MEALS</p>
              {this.props.mealArray.map((meal, idx) => {
                return (
                  <div className='fooditem' key={idx}>
                    <p>{meal.name}</p>
                    <p>{meal.like ? '🤩' : null}</p>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default withAuth0(MealModal);
