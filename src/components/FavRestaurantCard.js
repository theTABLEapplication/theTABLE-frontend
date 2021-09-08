import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Card, Button } from 'react-bootstrap';

class FavRestaurantCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visitCount: this.props.restaurant.visits
    };
  }

  handleVisitCount = async (restaurant) => {
    await this.setState({
      visitCount: this.state.visitCount + 1,
    });
    this.props.onVisit(restaurant, this.state.visitCount);
  }

  render() {
    return (
      <Col sm={3}>
        <Card key={this.props.index}>
          <Card.Img
            // onClick={}
            variant="top"
            src={this.props.restaurant.image_url}
            alt={this.props.restaurant.name}
            title={this.props.restaurant.name} />
          <Card.Body>
            <Card.Title>{this.props.restaurant.name}</Card.Title>
            <Card.Text>{this.props.restaurant.location[0]}</Card.Text>
            <Card.Text>{this.props.restaurant.location[1]}</Card.Text>
            <Card.Text className='visitcount'>VISITS: {this.state.visitCount}</Card.Text>
            <Button onClick={() => this.handleVisitCount(this.props.restaurant)}>VISIT</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default FavRestaurantCard;

