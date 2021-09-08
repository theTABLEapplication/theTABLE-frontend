import React, { Component } from 'react';
import FavRestaurant from './FavRestaurantCard';

class FavRestaurantCards extends Component {
  render() {
    return (
      this.props.favRestaurants.map((restaurant) => {
        return (
          <FavRestaurant onVisit={this.props.onVisit} restaurant={restaurant} key={restaurant._id}
          />
        );
      })
    );
  }
}

export default FavRestaurantCards;
