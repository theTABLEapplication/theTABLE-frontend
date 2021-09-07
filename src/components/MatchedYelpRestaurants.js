import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class MatchedYelpRestaurants extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.restaurants.map(restaurant => {
          return (
            //TODO: add function to onClick, confirm how to access restaurant name and address from database.
            // <ListGroup.Item action onClick={alertClicked}>
            <ListGroup.Item>
              <p>name: {restaurant.name}</p><br/>
              <p>location: {restaurant.address}</p>
            </ListGroup.Item>
          );
        })
        }
      </ListGroup>
    );
  }
}

export default MatchedYelpRestaurants;

