import { Component } from 'react';
import {Button, ListGroup} from 'react-bootstrap/';

class MatchedYelpRestaurants extends Component {

  addRestaurant = (restaurant) => {
    console.log('event', restaurant);
  }

  render() {
    return (
      <ListGroup>
        {this.props.restaurants.map(restaurant => {
          return (
            //TODO: add function to onClick, confirm how to access restaurant name and address from database.
            // <ListGroup.Item action onClick={alertClicked}>
            <ListGroup.Item key={restaurant.id}>
              <div>
                <p>name: {restaurant.name}</p><br/>
                <p>location: {restaurant.location.address1}</p>
              </div>
              <Button onSubmit={this.addRestaurant(restaurant)}>Select</Button>
            </ListGroup.Item>
          );
        })
        }
      </ListGroup>
    );
  }
}

export default MatchedYelpRestaurants;

