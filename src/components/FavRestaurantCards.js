import React, { Component } from 'react';
import FavRestaurantCard from './FavRestaurantCard';

class FavRestaurantCards extends Component {
  render() {
    return (
      this.props.favRestaurants.map((restaurant, idx) => {
        return (
          <FavRestaurantCard showEditModal={this.props.showEditModal} onVisit={this.props.onVisit} restaurant={restaurant} key={restaurant._id} index={idx}
          />
        );
      })
    );
  }
}

export default FavRestaurantCards;
