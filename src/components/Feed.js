import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
// import SearchBar from './SearchBar';
// import AddFavDish from './AddFavDish';

import PostRestaurant from './PostRestaurant';
import FavRestaurantCards from './FavRestaurantCards';
import EditModal from './EditModal';
import MyMap from './MyMap';
import '../css/Feed.css';

const server = process.env.REACT_APP_HEROKU_URL || process.env.REACT_APP_LOCAL;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddRestaurantModal: false,
      showEditModal: false,
      favRestaurants: [],
      selectedRestaurant: {},
    };
  }

  handleGet = async () => {
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'get',
        baseURL: server,
        url: '/favRestaurants',
        params: { email: this.props.auth0.user.email },
      };
      await axios(config).then((response) => {
        this.setState({ favRestaurants: response.data });
      })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  componentDidMount = () => {
    this.handleGet();
  }

  handleShowAddRestaurantModal = () => {
    this.setState({
      showAddRestaurantModal: true,
    });
  };

  handleCloseAddRestaurantModal = () => {
    this.setState({
      showAddRestaurantModal: false,
    });
  };

  handleShowEditModal = (restaurant) => {
    console.log(restaurant);
    this.setState({
      selectedRestaurant: restaurant,
      showEditModal: true,
    });
  };

  handleCloseEditModal = () => {
    this.setState({
      showEditModal: false,
      selectedRestarant: {},
    });
  };

  // searchMyRestaurants(restaurantinput) {
  //   let filtered = this.props.favRestaurants.filter(x => x.name === restaurantinput);
  //   if (filtered) {
  //     this.setState({ favRestaurants: filtered });
  //     console.log(this.state.favRestaurants);
  //   } else {
  //     this.handleGet();
  //   }
  // }

  onVisit = async (restaurant, visits) => {
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'put',
        baseURL: server,
        url: `restaurants/${restaurant._id}`,
        data: { visits },
        params: { email: this.props.auth0.user.email },
      };
      try {
        const response = await axios(config);
        const updatedRestaurant = response.data;
        const restaurants = this.state.favRestaurants.map(x => x._id === updatedRestaurant._id ? updatedRestaurant : x);
        this.setState({ favRestaurants: restaurants });
      } catch (error) {
        console.error(error);
      }
    });
  }


  render() {
    return (
      <div id="feedDiv">
        {this.state.favRestaurants.length ? <MyMap favRestaurants={this.state.favRestaurants}
          handleGet={this.handleGet} /> : null}
        {this.state.showAddRestaurantModal ? (
          <PostRestaurant
            show={this.state.showAddRestaurantModal}
            onClose={this.handleCloseAddRestaurantModal}
            handleGet={this.handleGet}

          />
        ) : (
          <div id="checkInButtonDiv">
            <Button id="checkInButton" onClick={this.handleShowAddRestaurantModal}>
              +RESTAURANT
            </Button>
          </div>
        )}
        {this.state.selectedRestaurant ?
          <EditModal show={this.state.showEditModal} onClose={this.handleCloseEditModal} selectedRestaurant={this.state.selectedRestaurant} />
          : null
        }
        <div id='rescards'>
          {this.state.favRestaurants.length ? <FavRestaurantCards onVisit={this.onVisit} favRestaurants={this.state.favRestaurants} stateEditModal={this.state.showEditModal} closeEditModal={this.handleCloseEditModal} showEditModal={this.handleShowEditModal} /> : null}
        </div>
      </div>
    );
  }
}

export default withAuth0(Feed);
