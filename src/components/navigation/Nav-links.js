import React from 'react';
import { Link } from 'react-scroll';

import Logo from "../../static/assets/images/logo.jpg";


const NavComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className='nav-link-wrapper'>
        <Link to={route} duration={1000} activeclassname='nav-link-active'>
          {linkText}
        </Link>
      </div>
    )
  };

  return (
    <React.StrictMode>
      <div className='nav-bar'>
        <div className='nav-bar-logo'>
          <img src={Logo} />
          <h2>Now Presenting</h2>
        </div>
        <div className='nav-bar-wrapper'>
          <div >
            {dynamicLink("/", "Home")}
          </div>
          <div >
            {dynamicLink("/about", "About")}
          </div>
          <div >
            {dynamicLink("/contact", "Contact")}
          </div>
          <div>
            {dynamicLink("/projects", "Projects")}
          </div>
        </div>
      </div>
    </React.StrictMode>  
  )
};

export default NavComponent;