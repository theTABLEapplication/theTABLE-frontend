import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" id="navBarFooter">
        <Navbar.Brand id="navBarFooterTitle">theTABLE</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
