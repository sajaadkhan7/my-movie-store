//import required react components
import React from 'react';
// import react bootstrap 
import * as ReactBootstrap from 'react-bootstrap';
//import outlet from react router dom .. it is a component which links would target to render
import { Outlet } from 'react-router-dom';
// link container if we are using react with bootstap
import { LinkContainer } from 'react-router-bootstrap';
//footer component
import Footer from './Footer';
//logo for the website
import logo from '../../images/movieStore_Logo.png';

const Layout = () => {
    return (
        <>
          <ReactBootstrap.Navbar style={{fontSize:'1.1rem'}} sticky="top" bg="dark" variant="dark" expand="md">
          <ReactBootstrap.Container fluid>
             <LinkContainer to="/">
              <ReactBootstrap.Navbar.Brand><ReactBootstrap.Image className="w-25"  src={logo}></ReactBootstrap.Image> <b  style={{fontSize:'1.3rem'}}>&nbsp;MoviStore</b></ReactBootstrap.Navbar.Brand>
             </LinkContainer>          
             <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
             <ReactBootstrap.Navbar.Collapse id="navbarScroll">
              <ReactBootstrap.Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: 'auto' }}
                navbarScroll>
                
    
                <LinkContainer to="/">
                <ReactBootstrap.Nav.Link>Home</ReactBootstrap.Nav.Link>
                </LinkContainer>
               
                <LinkContainer to="/list" >
                <ReactBootstrap.Nav.Link>Movies</ReactBootstrap.Nav.Link>
                </LinkContainer>

                <LinkContainer to="/tvshows" >
                <ReactBootstrap.Nav.Link>Tv Shows</ReactBootstrap.Nav.Link>
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