import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import FindRestaurantForm from './GetRestaurant';
import MatchedYelpRestaurants from './MatchedYelpRestaurants';
import { withAuth0 } from '@auth0/auth0-react';
import '../css/AddRest.css';

// const server = process.env.REACT_APP_HEROKU_URL;
const server = 'http://localhost:3001';

class PostRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  findRestaurant = async (restaurantInfo) => {
    this.props.auth0
      .getIdTokenClaims()
      .then(async (res) => {
        this.setState({restaurants: []});
        const jwt = res.__raw;
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
          baseURL: server,
          url: '/restaurants',
          method: 'get',
          params: { term: restaurantInfo.term, location: restaurantInfo.location },
        };
        const Server_Response = await axios(config);
        this.setState({ restaurants: Server_Response.data });
      })
      .catch((error) => console.error(error));
  };

  // TODO: reset restaurant state to empty array after selecting restaurant from api search

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">Add A Restaurant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.restaurants.length ? (
              <MatchedYelpRestaurants restaurants={this.state.restaurants} />
            ) : (
              <FindRestaurantForm findRestaurant={this.findRestaurant} />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button id="modalButton" onClick={this.props.onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(PostRestaurant);
