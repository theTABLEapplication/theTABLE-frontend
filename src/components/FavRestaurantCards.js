import React, { Component } from "react";
import FavRestaurant from "./FavRestaurantCard";

class FavRestaurantCards extends Component {
  render() {
    return (
      this.props.favRestaurants.map((restaurant) => {
        return (
          <FavRestaurant
            // key = {restaurant.image_url}
            name={restaurant.name}
            image_url={restaurant.image_url}
            description={restaurant.description}
          />
        );
      })
    );
  }
}

export default FavRestaurantCards;
