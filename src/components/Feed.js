import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavRestaurantForm from './FavRestaurantForm';
import FavRestaurantCards from './FavRestaurantCards';
// import AddFavDish from './AddFavDish';
import AddRestaurant from './AddRestaurant';
import Button from 'react-bootstrap/Button';
import '../css/Feed.css';

// TODO: ADD auth0 to areas we are accessing APIS


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddRestaurantModal: false,
      favRestaurants: []
    };
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

  render() {
    return (
      <div id="feedDiv">
        <FavRestaurantForm />
        {this.state.favRestaurants.length ? <FavRestaurantCards favRestaurants={this.state.favRestaurants} /> : null}
        {this.state.showAddRestaurantModal ? (
          <AddRestaurant
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
      </div>
    );
  }
}

export default Feed;
