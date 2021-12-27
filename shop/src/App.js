import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Carousel} from 'react-bootstrap';
import './App.css';
import { name, name2 } from './data';

function App() {

  // let [shoes, shoes변경] = useState();

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
{name}
{name2}
      <Carousel variant="dark" >
        <Carousel.Item>
          <img
            className="center-block w-25"
            src="https://github.com/magmom95/interex/blob/main/pic_5.jpg?raw=true" 
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="center-block w-25"
            src="https://github.com/magmom95/interex/blob/main/pic_6.jpg?raw=true" width="100%"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="center-block w-25"
            src="https://github.com/magmom95/interex/blob/main/pic_7.jpg?raw=true" width="100%"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/><br/>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='https://github.com/magmom95/interex/blob/main/nike_1_1.JPG?raw=true' width='100%' height='78%'/>
            <h4>상품명</h4>
            <p>사용설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://github.com/magmom95/interex/blob/main/nike_2_1.JPG?raw=true' width='100%' height='78%'/>
            <h4>상품명</h4>
            <p>사용설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://github.com/magmom95/interex/blob/main/nike_3_1.JPG?raw=true' width='100%' height='78%'/>
            <h4>상품명</h4>
            <p>사용설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
