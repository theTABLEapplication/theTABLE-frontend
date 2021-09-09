import React from 'react';
import LoginButton from './LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../css/login.css';

class Login extends React.Component {
  render() {
    return (
      <Card className='logincard' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title id="cardTitle">theTABLE</Card.Title>
          <img src="../assets/tablelogo.png" />
          <LoginButton />
        </Card.Body>
      </Card>
    );
  }
}

export default Login;
