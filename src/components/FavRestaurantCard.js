import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Card, Button} from 'react-bootstrap';

class FavRestaurantCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visitCount: 0
    };
  }

  handleVisitCount = (restaurant) => {
    console.log(restaurant);
    this.setState({
      visitCount: this.state.visitCount + 1,
    });
    this.props.onVisit(restaurant, this.state.visitCount);
  }

  render() {
    return (
      <Col sm={3}>
        <Card key={this.props.key}>
          <Card.Img
            // onClick={}
            variant="top"
            src={this.props.restaurant.image_url}
            alt={this.props.restaurant.name}
            title={this.props.restaurant.name}/>
          <Card.Body>
            <Card.Title>{this.props.restaurant.name}</Card.Title>
            <Card.Text>{this.props.restaurant.description}</Card.Text>
            <Card.Text class='visitcount'>VISITS: {this.state.visitCount}</Card.Text>
            <Button onClick={() => this.handleVisitCount(this.props.restaurant)}>VISIT</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default FavRestaurantCard;

