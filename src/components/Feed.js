import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SearchBar from './SearchBar';
import FavRestaurantCards from './FavRestaurantCards';
// import AddFavDish from './AddFavDish';
import PostRestaurant from './PostRestaurant';
import MyMap from './MyMap';
import Button from 'react-bootstrap/Button';
import '../css/Feed.css';
import axios from 'axios';
const server = 'http://localhost:3001';
import { withAuth0 } from '@auth0/auth0-react';
const mapKey = process.env.REACT_APP_LOCATION;


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddRestaurantModal: false,
      favRestaurants: [],
      favMapUrl: '',
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
      // console.log(this.state.favRestaurants);
      this.getPins();
    });
  }

  getPins = async () => {
    let coordinateArray = [];
    this.state.favRestaurants.map(x => {
      coordinateArray.push(`${x.latitude},${x.longitude}`);
    });
    // for (let i = 0; i < lat.length; i++) {
    //   coordinateArray.push(`${lat[i]},${lon[i]}`);
    // }
    // console.log(coordinateArray);
    let baseUrl = `https://maps.locationiq.com/v3/staticmap?key=${mapKey}&markers=icon:small-green-cutout|`;
    let coordinates = coordinateArray.join('|');
    // console.log(coordinates);
    let finalMapURL = baseUrl + coordinates;
    // console.log(finalMapURL);
    this.setState({ favMapUrl: finalMapURL });
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

  searchMyRestaurants(restaurantinput) {
    let filtered = this.props.favRestaurants.filter(x => x.name === restaurantinput);
    if (filtered) {
      this.setState({ favRestaurants: filtered });
      console.log(this.state.favRestaurants);
    } else {
      this.handleGet();
    }
  }

  //TODO: finish this
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
        {/* <SearchBar searchMyRestaurants={this.searchMyRestaurants} favRestaurants={this.state.favRestaurants} /> */}
        {this.state.showAddRestaurantModal ? (
          <PostRestaurant
            show={this.state.showAddRestaurantModal}
            onClose={this.handleCloseAddRestaurantModal}
            handleGet={this.handleGet}
          />
        ) : (
          <div id="checkInButtonDiv">
            <Button id="checkInButton" onClick={this.handleShowAddRestaurantModal}>
              Check-in!
            </Button>
          </div>
        )}
        {this.state.favRestaurants.length ? <FavRestaurantCards onVisit={this.onVisit} favRestaurants={this.state.favRestaurants} /> : null}
        {this.state.favRestaurants.length ? <MyMap favRestaurants={this.state.favRestaurants} favMapUrl={this.state.favMapUrl} /> : null}
      </div>
    );
  }
}

export default withAuth0(Feed);
