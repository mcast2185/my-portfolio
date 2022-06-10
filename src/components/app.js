import React from 'react';

import Mouse from './functionals/mouse';
import Icons from './helpers/icons';
import NavComponent from "./navigation/Nav-links";
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';


const App = () => {
  Icons();
  
  return (
    <div className='app' >
      <Mouse/>
      <NavComponent/>
      <Home/>
      <About/>
      <Contact/>
      <Projects/>
    </div>
  );
}

export default App;