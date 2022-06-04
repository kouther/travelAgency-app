import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PhoneIcon from '@mui/icons-material/Phone';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from "./logo.png";
import '../Style.css';

import LocationOnIcon from '@mui/icons-material/LocationOn';




const Header=()=>{

    return(

<Navbar bg="light" expand="lg" style={{background: '#fff !important'}}>
  <Container fluid>
    <Navbar.Brand href="#"><img src={logo} style={{width: '30%'}} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/about" className="menu-item">About</Link>
            <a href="#hotels" className="menu-item">Hotels</a>
            <a href="#tours" className="menu-item">Tours</a>
            <Link to="/contact" className="menu-item">Contact</Link>


      </Nav>
      <div><span className="social-icon"><PhoneIcon/> </span> +216 73 007 003</div>

      <div><span className="social-icon"><LocationOnIcon/> </span> <span>Travel Point, Badda Link Road, Tunisie</span></div>

    </Navbar.Collapse>
  </Container>
</Navbar>
    );

}

export default Header;