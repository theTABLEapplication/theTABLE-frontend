import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



class FavRestaurantCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visitCount: 0
    };
  }

  handleVisitCount = () => {
    const newvisit = this.state.visitCount + 1;
    this.setState({
      visitCount: newvisit
    });
  }

  render() {
    return (
      <Col sm={3}>
        <Card id="card" onClick={this.handleVisitCount}>
          <Card.Img
            // onClick={}
            variant="top"
            src={this.props.image_url}
            alt={this.props.name}
            title={this.props.name}/>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text id="favoriteCount">{this.state.visitCount}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default FavRestaurantCard;

