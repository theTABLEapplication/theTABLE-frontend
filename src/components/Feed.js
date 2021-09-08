import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SearchBar from './SearchBar';
import FavRestaurantCards from './FavRestaurantCards';
// import AddFavDish from './AddFavDish';
import PostRestaurant from './PostRestaurant';
import Button from 'react-bootstrap/Button';
import '../css/Feed.css';
import axios from 'axios';
const server = 'http://localhost:3001';
import { withAuth0 } from '@auth0/auth0-react';


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddRestaurantModal: false,
      favRestaurants: []
    };
  }

  handleGet = async () => {
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: server,
        // confirm what route for this function
        url: "/restaurants",
        params: { email: this.props.auth0.user.email },
      };
      await axios(config).then((response) => {
        this.setState({ favRestaurants: response.data });
        console.log(this.state.favRestaurants);
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

  searchMyRestaurants(restaurantinput) {
    let filtered = this.props.favRestaurants.filter(x => x.name === restaurantinput);
    if (filtered) {
      this.setState({ favRestaurants: filtered });
      console.log(this.state.favRestaurants);
    } else {
      this.handleGet();
    }
  }

  onVisit = async (restaurant) => {
    this.props.auth0.getIdTokenClaims().then(async(res) =>{
      const jwt=res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'put',
        baseURL: ServiceWorkerRegistration,
        url: `restaurant/${restaurant._id}`,
        data: restaurant,
        params: { email: this.props.auth0.user.email },
      };
      try{
        const response = await axios(config);
        const updatedRestaurant = response.data;
        const restaurants = this.state.favRestaurants.map(x => x._id === updatedRestaurant._id ? updatedRestaurant : x );
        this.setState({favRestaurants: restaurants});
      }catch(error){
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
          />
        ) : (
          <div id="checkInButtonDiv">
            <Button id="checkInButton" onClick={this.handleShowAddRestaurantModal}>
              Check-in!
            </Button>
          </div>
        )}
        {this.state.favRestaurants.length ? <FavRestaurantCards onVisit={this.onVisit} favRestaurants={this.state.favRestaurants} /> : null}
      </div>
    );
  }
}

export default withAuth0(Feed);
