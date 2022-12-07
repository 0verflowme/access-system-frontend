import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
   const isAdmin = JSON.parse(localStorage.isAdmin);
   return (
      <div>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="/">Access System</Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link disabled={!isAdmin} href="/add">Members</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </div>
   );
}

export default NavBar;
