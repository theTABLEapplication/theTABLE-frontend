import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Accordion } from 'react-bootstrap';
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
      <div key={this.props.index} className='favCard'>
        <Card className='card' key={this.props.index}>
          <Card.Img
            variant="top"
            src={this.props.restaurant.image_url}
            alt={this.props.restaurant.name}
            title={this.props.restaurant.name} />
          <Card.Body>
            <div className='restedit'>
              <Button onClick={() => this.props.showMealModal(this.props.restaurant)}>+MEAL</Button>
              <Button onClick={() => this.props.showEditModal(this.props.restaurant)}>EDIT</Button>
            </div>
            <div className='resttext'>
              <Card.Title>{this.props.restaurant.name}</Card.Title>
              <div>
                <Card.Text>{this.props.restaurant.location[0]}</Card.Text>
                <Card.Text>{this.props.restaurant.location[1]}</Card.Text>
              </div>
            </div>
            <div className='restvisits'>
              <p>VISITS</p>
              <Card.Text className='visitcount'>{this.state.visitCount}</Card.Text>
              <Button onClick={() => this.handleVisitCount(this.props.restaurant)}>CHECK-IN</Button>
            </div>
          </Card.Body>
        </Card>
        <Accordion defaultActiveKey={this.props.index}>
          <Accordion.Item eventKey={this.props.index}>
            <Accordion.Header>Meals</Accordion.Header>
            {this.props.restaurant.meals.map((meal, idx) => {
              return (
                <Accordion.Body key={idx}>
                  {meal.name}
                  {meal.like ? ':  RECOMMEND!' : null}
                </Accordion.Body>
              );
            })}
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default FavRestaurantCard;
