import React from 'react';

import * as ReactBootstrap from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { LinkContainer } from 'react-router-bootstrap';

const Layout = () => {
    return (
        <>
          <ReactBootstrap.Navbar bg="dark" variant="dark" expand="md">
          <ReactBootstrap.Container fluid>
           
            <LinkContainer to="/">
               <ReactBootstrap.Navbar.Brand>MovieStore</ReactBootstrap.Navbar.Brand>
            </LinkContainer>
           
            <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootstrap.Navbar.Collapse id="navbarScroll">
              <ReactBootstrap.Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                
                <LinkContainer to="/">
                <ReactBootstrap.Nav.Link>Home</ReactBootstrap.Nav.Link>
                </LinkContainer>
               
                <LinkContainer to="/list" >
                <ReactBootstrap.Nav.Link>List</ReactBootstrap.Nav.Link>
                </LinkContainer>
               
                <LinkContainer to="/create">
                <ReactBootstrap.Nav.Link>Create</ReactBootstrap.Nav.Link>
                </LinkContainer>
  
                <LinkContainer to="/about">
                <ReactBootstrap.Nav.Link>About</ReactBootstrap.Nav.Link>
                </LinkContainer>
  
              </ReactBootstrap.Nav>        
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        <Outlet />    
      <Footer/>  
      </>
      )
  }
  
  export default Layout;