import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo  from './images/navlogo.svg';

import './Navbar.css'
function Upper(){
       const [show,setShow] = useState(false);
       const [hide,setHide] = useState(true)
       const handleshow=()=>{
           setShow(true);
           setHide(false);
       }
       const closeSearchbox=()=>{
        setShow(false);
        setHide(true);
       }
  return (
      <div className="Navmaincontainer">
        <Navbar className="bg-body-tertiary navContainer ">
         
          <Container  fluid >
            <Navbar.Brand href="">
              <div className='spanlogo'>
              <span className='signal'><i className="fa-solid fa-signal" id='icon-nav'></i></span>
              <span>
              <li className='nav-left-li'>Revenue Driven for Our Clients</li>
              <li className='nav-left-li1'>2,120,240,443</li>
            </span></div>
           
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            
             <span id='searchForm'>
               {
                hide? <div className='rightbar'>
                <span className='signal'><i class="fa-solid fa-phone" id='icon-nav'></i></span>
                <span>
               <li className='nav-left-li'>Get a pproposal</li>
                <li className='nav-left-li1'> 888-400-5050</li>
          
                </span>
              
                </div>:null
               }
              {
                show?<Form className="d-flex " >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                <button className='closebutton'><i class="fa-solid fa-xmark"></i></button>
              </Form>:null
              }
             </span>
            {
              hide? <button onClick={handleshow} id='searchbtn'><i class="fa-solid fa-magnifying-glass"></i></button>:null
            }
            </Navbar.Collapse>
          </Container>
          
      
    </Navbar> 
    </div>

      
        
  );
}

export default Upper;