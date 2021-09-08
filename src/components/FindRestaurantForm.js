import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/FindRestForm.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class FindRestaurantForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const restaurantInfo = {
      term: event.target.restaurantName.value,
      location: event.target.restaurantLocation.value,
    };
    this.props.findRestaurant(restaurantInfo);
  };


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='restaurantName' id="formGroup">
          <FloatingLabel label="Enter Restaurant Name">
            <Form.Control type='name' placeholder='Enter Restaurant Name Here' />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId='restaurantLocation'>
          <FloatingLabel label="Enter Restaurant City, Zip Code, or Address Here">
            <Form.Control type='location' placeholder='Enter City, Zip Code, or Address' />
          </FloatingLabel>
        </Form.Group>
        <Button id="findRestButton" type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}

export default FindRestaurantForm;
