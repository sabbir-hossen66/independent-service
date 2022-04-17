import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../Header/Header.css'
import logo from '../../../images/logo.jpg'

const Header = () => {
    return (
        <>
            <Navbar className='p-3' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height="70" width="100" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;