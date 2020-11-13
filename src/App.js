import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"




import "./App.css"






function App() {
  return (
    <div className="App">
      <Navbar className="navBottom" bg="dark" variant="dark">
        <Navbar.Brand href="/">Oliver Bigelow</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
        </Router>
      </Container>

    </div>
  );
}

export default App;
