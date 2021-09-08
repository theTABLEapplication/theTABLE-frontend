import { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

import Logout from './LogoutButton';
import Login from './LoginButton';
import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" id="navBar">
        <Navbar.Brand id="navBarTitle">theTABLE</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/checkin" className="nav-link">Check-In</Link></NavItem>
        <NavItem><Link to="/mymap" className="nav-link">My Map</Link></NavItem>
        <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
        {this.props.auth0.isAuthenticated ? <Logout /> : <Login />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
