import { Component } from 'react';
import {Button, ListGroup} from 'react-bootstrap/';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

const server = 'http://localhost:3001';

class MatchedYelpRestaurants extends Component {

  addRestaurant = (restaurant) => {
    console.log(restaurant);
    this.props.auth0
      .getIdTokenClaims()
      .then(async (res) => {
        this.setState({restaurants: []});
        const jwt = res.__raw;
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
          baseURL: server,
          url: '/restaurants',
          method: 'post',
          data: {
            name: restaurant.name,
            location: restaurant.location.display_address,
            latitude: restaurant.coordinates.latitude,
            longitude: restaurant.coordinates.longitude,
            image_url: restaurant.image_url,
            url: restaurant.url,
            meals: [],
            categories: restaurant.categories,
            visits: 1,
            email: this.props.auth0.user.email
          }
        };
        const Server_Response = await axios(config);
        this.setState({ restaurants: Server_Response.data });
        this.props.onClose();
        this.props.handleGet();
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <ListGroup>
        {this.props.restaurants.map(restaurant => {
          return (
            //TODO: add function to onClick, confirm how to access restaurant name and address from database.
            // <ListGroup.Item action onClick={alertClicked}>
            <ListGroup.Item key={restaurant.id} onClick={() => this.addRestaurant(restaurant)}>
              <div>
                <p>{restaurant.name}</p>
                <p>{restaurant.location.display_address[0]} {restaurant.location.display_address[1]}</p>
              </div>
              <Button>Select</Button>
            </ListGroup.Item>
          );
        })
        }
      </ListGroup>
    );
  }
}

export default withAuth0(MatchedYelpRestaurants);

