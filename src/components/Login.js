import React from 'react';
import LoginButton from './LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../css/login.css';
import logo from '../assets/tablelogo.png';


class Login extends React.Component {
  render() {
    return (
      <Card className='logincard' style={{ width: '18rem' }}>
        <Card.Body>
          <h1 id="loginCardTitle">theTABLE</h1>
          <img id="logoLogin" src={logo} />
          <LoginButton />
        </Card.Body>
      </Card>
    );
  }
}

export default Login;
