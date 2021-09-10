import { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

import Logout from './LogoutButton';
import Login from './LoginButton';
import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/tablelogo.png';

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" id="navBar">
        <Navbar.Brand id="navBarTitle"><img src={logo} /> theTABLE </Navbar.Brand>
        {this.props.auth0.isAuthenticated ? (<NavItem><Link to="/" className="nav-link">Home</Link></NavItem>) : null}
        {this.props.auth0.isAuthenticated ? (<NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>) : null}
        {this.props.auth0.isAuthenticated ? (<NavItem><Link to="/aboutus" className="nav-link">About Us</Link></NavItem>) : null}
        {this.props.auth0.isAuthenticated ? <Logout /> : <Login />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
