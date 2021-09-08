import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavRestaurantForm from './FavRestaurantForm';
import FavRestaurantCards from './FavRestaurantCards';
// import AddFavDish from './AddFavDish';
import AddRestaurant from './AddRestaurant';
import Button from 'react-bootstrap/Button';


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
      <>
        <FavRestaurantForm />
        {this.state.favRestaurants.length ? <FavRestaurantCards favRestaurants={this.state.favRestaurants}/> : null}
        {this.state.showAddRestaurantModal ? (
          <AddRestaurant
            show={this.state.showAddRestaurantModal}
            onClose={this.handleCloseAddRestaurantModal}
          />
        ) : (
          <Button onClick={this.handleShowAddRestaurantModal}>
            Check in to restAURant
          </Button>
        )}
      </>
    );
  }
}

export default Feed;
