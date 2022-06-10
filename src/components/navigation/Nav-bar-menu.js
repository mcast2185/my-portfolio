import React, {useState}from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button }from "react-bootstrap";

import Logo from "../../static/assets/images/logo.jpg";


const NavBarMenu = () => {
  const options = [
    {
      name: <FontAwesomeIcon icon="fa-solid fa-ellipsis" />,
      scroll: true,
      backdrop: true
    }
  ];
  
  function ClickMenu({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
    return (
      <React.StrictMode>
        <div>
          <Button variant="primary" onClick={toggleShow} className="me-2">
            {name}
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Browse these:</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className='onClick-menu-list'>
                <li><a>Websites</a> </li>
                <li> <a>Challenges</a></li>
                <li> <a>Services</a></li>
              </ul>
              <div className='onClick-menu-list-nav-links'>
                <ul className='links'>
                  <li><a>Home</a></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </div>
              <div className='onClick-menu-logo'>
                <img src={Logo}/>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </React.StrictMode>
    );
  }
  
  function Menu() {
    return (
      <div>
        {options.map((props, idx) => (
          <ClickMenu key={idx} {...props} />
        ))}
      </div>
    );
  }
  
  return (
    <React.StrictMode>
      <div>
        <Menu />
      </div>
    </React.StrictMode>
  );

}

export default NavBarMenu;