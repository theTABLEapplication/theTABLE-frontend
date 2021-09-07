import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FavRestaurantForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="favoriteRestaurantSearch">
          <Form.Label>Search Your Favorites</Form.Label>
          <Form.Control
            type="restaurantName"
            placeholder="Enter Restaurant Name"
          ></Form.Control>
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Search
        </Button>{" "}
      </Form>
    );
  }
}

export default FavRestaurantForm;
