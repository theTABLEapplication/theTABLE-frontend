import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FavRestaurantForm from "./FavRestaurantForm";
// import Checkin from "./Checkin";
import AddRestaurant from "./AddRestaurant";
import Button from "react-bootstrap/Button";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddRestaurantModal: false,
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
        <div>
          <FavRestaurantForm />
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
          {/* <Checkin /> */}
        </div>
        <div>Feed Coming Soon...</div>
        <div>{/* <Button>Temporary Button</Button> */}</div>
      </>
    );
  }
}

export default Feed;
