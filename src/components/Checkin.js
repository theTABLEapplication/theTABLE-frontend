import {Component} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Checkin extends Component {
  render(){
    return(
      <Form>
        <Form.Group className="mb-3" controlId="formRestaurant">
          <Form.Control type="text" placeholder="Restaurant Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Control type="text" placeholder="Restaurant Location" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMeal">
          <Form.Control type="text" placeholder="What Did You Eat?" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRecommend">
          <Form.Check type="checkbox" label="Recommend?" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload a photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button type="submit">ADD</Button>
      </Form>
    );
  }
}

export default Checkin;
