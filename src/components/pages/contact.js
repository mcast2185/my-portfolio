import React from 'react';
import { SocialIcon } from 'react-social-icons';
import AOS from "aos";
import "aos/dist/aos.css"

const Contact = () => {
  return (
    <React.StrictMode>
      <div className='contact-container /contact'>
        <div className='contact-heading'> 
          <h1 data-aos="fade-right">Contact</h1>
        </div>
        <div className='contact-container-body'>
          <div className='contact-container-content'>
            <div className='contact-left-content'>
              <ul className='contact-list'>
                <li>Telephone:</li>
                <li>619-706-9599</li>
                <li>Email: </li>
                <li><a src="Mcast2185@gmail.com">Mcast2185@gmail.com</a></li>
                <li>Social Media: </li>
                <li>
                  | <SocialIcon url="https://github.com/mcast2185"/>
                  | <SocialIcon url="https://linkedin.com/in/mcast2185"/> 
                  | <SocialIcon url="https://twitter.com/JamesP_mcAdams"/> 
                </li>
              </ul>
            </div>
            <div className='contact-right-content'>
              <h1 data-aos="fade" data-aos-delay="300" className='contact-header-two'> Get in tou<span>c</span>h </h1>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Contact;