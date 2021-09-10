import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../css/FavRestCard.css';

class FavRestaurantCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visitCount: this.props.restaurant.visits,
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

      <Card id="favRestCard" className='card' key={this.props.index}>
        <Card.Img
          variant="top"
          src={this.props.restaurant.image_url}
          alt={this.props.restaurant.name}
          title={this.props.restaurant.name} />
        <Card.Body>
          <div className='restedit'>
            <Button id="editMealButton" onClick={() => this.props.showEditModal(this.props.restaurant)}>EDIT</Button>
            <Button id="addMealButton" onClick={() => this.props.showMealModal(this.props.restaurant)}>+MEAL</Button>
          </div>
          <div className='resttext'>
            <Card.Title id="cardTitle">{this.props.restaurant.name}</Card.Title>
            <div id="cardAddress">
              <Card.Text>{this.props.restaurant.location[0]}</Card.Text>
              <Card.Text>{this.props.restaurant.location[1]}</Card.Text>
            </div>
            <a id="restCardURL" href={this.props.restaurant.url} target='_blank'>More Info</a>
          </div>
          <div className='restvisits'>
            <p>VISITS</p>
            <Card.Text className='visitcount'>{this.state.visitCount}</Card.Text>
            <Button onClick={() => this.handleVisitCount(this.props.restaurant)}>CHECK-IN</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default FavRestaurantCard;
