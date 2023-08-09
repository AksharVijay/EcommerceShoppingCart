import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi"

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand> Ecommerce</Navbar.Brand>
                <Nav>
                    <Link to="/"> Home</Link>
                    <Link to="/Cart"> <FiShoppingCart/></Link> 
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;