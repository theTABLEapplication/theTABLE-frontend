import React from 'react';
import LoginButton from './LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../css/login.css';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title id="cardTitle">Log In</Card.Title>
          <Card.Text id="cardText">Click Below to Log In</Card.Text>
          <LoginButton />
        </Card.Body>
      </Card>
    );
  }
}

export default Login;
