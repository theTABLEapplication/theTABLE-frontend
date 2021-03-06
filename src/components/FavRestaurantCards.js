import React, { Component } from 'react';
import FavRestaurantCard from './FavRestaurantCard';
import '../css/FavRestCards.css';

class FavRestaurantCards extends Component {
  render() {
    return (
      this.props.favRestaurants.map((restaurant, idx) => {
        return (
          <FavRestaurantCard showMealModal={this.props.showMealModal} showEditModal={this.props.showEditModal} onVisit={this.props.onVisit} restaurant={restaurant} key={restaurant._id} index={idx}
          />
        );
      })
    );
  }
}

export default FavRestaurantCards;
