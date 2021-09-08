import React, { Component } from 'react';
import FavRestaurant from './FavRestaurantCard';

class FavRestaurantCards extends Component {
  render() {
    return (
      this.props.favRestaurants.map((restaurant, idx) => {
        return (
          <FavRestaurant onVisit={this.props.onVisit} restaurant={restaurant} key={restaurant._id} index={idx}
          />
        );
      })
    );
  }
}

export default FavRestaurantCards;
