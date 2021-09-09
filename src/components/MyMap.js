import { Component } from 'react';
import React from 'react';
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;


class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO need to make this dynamic. defaulted to seattle
      lng: -122.3,
      lat: 47.6,
      zoom: 9,
    };
    this.mapContainer = React.createRef();
  }

  // Used MapBox DOCS to write the code below
  componentDidMount = () => { 
    const { lng, lat, zoom } = this.state;
    const mapBox = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/sarahcreager/cktcej46w0agf19qtkgz1r0xp',
      center: [lng, lat],
      zoom: zoom
    });

    mapBox.on('move', () => {
      this.setState({
        lng: mapBox.getCenter().lng.toFixed(4),
        lat: mapBox.getCenter().lat.toFixed(4),
        zoom: mapBox.getZoom().toFixed(2)
      });
    });

    if (this.props.favRestaurants) {
      this.props.favRestaurants.map((restaurant) => {
        return (new mapboxgl.Marker({
          color: '#8E7650',
          draggable: false
        }).setLngLat([restaurant.longitude, restaurant.latitude])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(
            `${restaurant.name} ${restaurant.location[0]} ${restaurant.location[1]}`
          ))
          .addTo(mapBox)
        );
      });
    }
  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={this.mapContainer} className="map-container">
        </div>
      </div>
    );
  }
}

export default MyMap;

