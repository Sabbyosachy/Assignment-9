import React from 'react';
import { Container, Nav,Navbar as Appbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

//Navbar create
const Navbar = () => {
    return (
        <Appbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Appbar.Brand to="/"><i class="fab fa-studiovinari"></i>Easy-Learn</Appbar.Brand>
  <Appbar.Toggle aria-controls="responsive-navbar-nav" />
  <Appbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
   
    </Nav>
    <Nav className="navlinks">
        <NavLink className="home" to="/">Home</NavLink>
        <NavLink className="#service" to="/service">Service</NavLink>
        <NavLink className="aboutus" to="/aboutus">About us</NavLink>
        <NavLink className="trainers" to="/trainers">Trainers</NavLink>
    </Nav>
  </Appbar.Collapse>
  </Container>
</Appbar>
    );
};

export default Navbar;