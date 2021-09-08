import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/FindRestForm.css';

class FindRestaurantForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    let regex = /\s/g;
    let term = event.target.restaurantName.value.replace(regex, '%20');
    const restaurantInfo = {
      term: term,
      location: event.target.restaurantLocation.value,
    };
    // alert('hello friends');
    this.props.findRestaurant(restaurantInfo);
  };


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='restaurantName'>
          <Form.Label>Restaurant Name</Form.Label>
          <Form.Control type='name' placeholder='Enter Restaurant Name Here' />
        </Form.Group>
        <Form.Group controlId='restaurantLocation'>
          <Form.Label>Restaurant Location</Form.Label>
          <Form.Control type='location' placeholder='Enter City, Zip Code, or Address Here' />
        </Form.Group>
        <Button id="findRestButton" type='submit'>
          hi
        </Button>
      </Form>
    );
  }
}

export default FindRestaurantForm;
