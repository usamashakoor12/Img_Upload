import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px"}}>
    <Container>
     <NavLink to="/" className="text-decoration-none"><Navbar.Brand>Navbar</Navbar.Brand></NavLink> 
      <Nav className="me-auto">
        <NavLink to="/register" className="text-decoration-none text-light">Register</NavLink>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Header