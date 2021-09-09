import {Component} from 'react';
import Image from 'react-bootstrap/Image';

class MyMap extends Component {



  render(){
    return(
      <Image src={this.props.favMapUrl} alt="map" thumbnail />
    );
  }

}

export default MyMap;
