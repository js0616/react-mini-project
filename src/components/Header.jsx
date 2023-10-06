import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom'





const Header = () => {
  return (
    <div >
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
      <Container fluid >
        <Navbar.Brand href="/"><img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170918.png' width={80}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='nav-item' to={'/'}>Home</Link>
            <Link className='nav-item' to={"/movies"}>Movies</Link>
            <Link className='nav-item' to={"/movies-copy"}>Movies</Link>
                        
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="검색할 영화명..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger"  >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header