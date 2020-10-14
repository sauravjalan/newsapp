import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Article from "./component/Article";
import Byline from "./component/Byline";
import Headline from "./component/Headline";
import Keyword from "./component/Keyword";
import Person from "./component/Person";
import Search from "./component/Search";
import {Nav,Navbar} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <router>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#Article"><Link to="/Article">Article</Link></Nav.Link>
      <Nav.Link href="#Byline"><Link to="/Byline">Byline</Link></Nav.Link>
      <Nav.Link href="#Headline"><Link to="/Headline">Headline</Link></Nav.Link>
      <Nav.Link href="#Keyword"><Link to="/keyword">Keyword</Link></Nav.Link>
      <Nav.Link href="#Person"><Link to="/Person">Person</Link></Nav.Link>
      <Nav.Link href="#Search"><Link to="/Search"></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <switch>
        <Route path="/article" component={Article}>
          <Article/>
        </Route>
        <Route path="/byline" component={Byline}>
          <Byline/>
        </Route>
        <Route path="/headline" component={Headline}>
          <Headline/>
        </Route>
        <Route path="/keyword"component={Keyword}>
          <Keyword/>
        </Route>
        <Route path="/person"component={Person}>
          <Person/>
        </Route>
        </switch>
      </router>
    </div>
  );
}

export default App;
