import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand> Ecommerce</Navbar.Brand>
                <Nav>
                    <Link to="/"> Home</Link>
                    <Link to="/Cart"> Cart</Link> 
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;