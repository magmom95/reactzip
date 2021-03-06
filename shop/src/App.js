import React, {useContext, useState, lazy, Suspense} from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Carousel} from 'react-bootstrap';
import './App.css';
import Data from './data';
import Test from './test';
import axios from 'axios';

import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Cart from './Cart.js';

let Detail = lazy(()=> import('./Detail.js'));

export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [text, text변경] = useState(Test);
  let [재고,재고변경] = useState([10,11,12])
  // let [cart,cart변경] = useState

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
              <Nav.Link as={Link} className='deco' to="/">Home</Nav.Link>
              <Nav.Link as={Link} className='deco' to="/detail">Detail</Nav.Link>
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

      <br/><br/>
    <Switch>
      <Route exact path="/">
      <Carousel variant="dark" >
          <Carousel.Item>
            <img
              className="center-block w-25"
              src="https://github.com/magmom95/interex/blob/main/pic_5.jpg?raw=true" 
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>{text[0].title}</h5>
              <p>{text[0].content}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="center-block w-25"
              src="https://github.com/magmom95/interex/blob/main/pic_6.jpg?raw=true" width="100%"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>{text[1].title}</h5>
              <p>{text[1].content}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="center-block w-25"
              src="https://github.com/magmom95/interex/blob/main/pic_7.jpg?raw=true" width="100%"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>{text[2].title}</h5>
              <p>{text[2].content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/><br/>
        <div className='container'>
          
          <재고context.Provider value={재고}>

          <div className='row'>
            {
              shoes.map((a, i)=> {
                return <Card shoes={shoes[i]} i={i} key={i} />
              })
            }
          </div>

          </재고context.Provider>

        </div>
      </Route>
      <Route exact path="/detail/:id">
        <재고context.Provider value={재고}>
          <Suspense fallback={<div>로딩중</div>}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </Suspense>
        </재고context.Provider>
      </Route>
      {/* <Route exact path="/:id">
        <div>아무거나 적었을때 보여진다</div>
      </Route> 아무 주소를 입력했을때 보임*/ }
    </Switch>
    <Route path="/cart">
            <Cart></Cart>
    </Route>
      {/* <Route path="/컴포넌트" component={Modal}></Route> */}
      {/* <div className='container'>
        <div className='row'>
          {
            shoes.map((a)=> {s
              return <Card shoes={a}/>
            })
          }
        </div>
      </div> */}

    {/* <button className='btn btn-warning' onClick={() => {

      axios.get()
      .then((result)=>{
        shoes변경([...shoes,...result.data])
      })
      .catch(()=>{
        console.log('실패')
      })  

    }}>더보기</button> */}
    </div>
        );
      }

  function Card(props){

    let 재고 = useContext(재고context);
    let history = useHistory();

      return(
        <div className='col-md-4' onClick={() => { history.push('/detail/' + props.shoes.id)}}>
            <img src={'https://github.com/magmom95/interex/blob/main/nike'+ (props.i+ 1)+'.JPG?raw=true'} width='100%' height='78%'/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p> 
        재고 : {재고[props.i]}
        </div>
      );
  }
  
export default App;
