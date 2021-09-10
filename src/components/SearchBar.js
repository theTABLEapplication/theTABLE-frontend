import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../css/FavRestForm.css';

class SearchBar extends Component {
  onChange = e => {
    this.props.searchMyRestaurants(e.target.value);
  }

  render() {
    return (
      <Form onChange={() => this.onChange} id="searchForm">
        <Form.Group controlId='favoriteRestaurantSearch'>
          <FloatingLabel label="Search Your Favorite Restaurants">
            <Form.Control
              id="searchRestInput"
              type='restaurantName'
              placeholder='Enter Restaurant Name'
            ></Form.Control>
          </FloatingLabel>
        </Form.Group>
        {/* <Button id="searchFavButton" type='submit'>
          Search
        </Button>{' '} */}
      </Form>
    );
  }
}

export default SearchBar;
