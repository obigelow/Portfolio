import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'

import Home from "./pages/Home"

import "./App.css"






function App() {
  return (
    <div className="App">
      <Navbar className="navBottom" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Oliver Bigelow</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Resume</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Home />
      </Container>

    </div>
  );
}

export default App;
