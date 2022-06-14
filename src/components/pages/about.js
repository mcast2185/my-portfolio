import React, {useEffect} from 'react';
import AOS from "aos";
import {gsap} from "gsap";
import $ from "jquery";
import { Timeline } from 'gsap/gsap-core';
import "aos/dist/aos.css";


import Beach from "../../static/assets/images/beach.jpg";


$(document).ready(function() {
  gsap.getTweensOf(".project-preview", { width: 0 });

  var tl = new Timeline();

  $(document)
    .on("mouseover", ".navigation-item", function(evt) {
      tl = new Timeline();
      tl.to($(".project-preview"), 1, {
        width: "600px",
        Expo: gsap.Ease
      });
    })
    .on("mouseout", ".navigation-item", function(evt) {
      tl = new Timeline();
      tl.to($(".project-preview"), 0.5, {
        width: 0,
        Expo: gsap.Ease
      });
    });
});

$(".navigation-link-1").hover(function() {
  $(".project-preview").css({ "background-image": "url(img-1.jpg)" });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  let scrollPercent = (scroll / (dh - wh)) * 100;
  $(".progressbar").css("height", scrollPercent + "%");
});

     
const About = () => {
  useEffect(() => {
    AOS.init({duration: 2500})
  }, []);

  return (
    <React.StrictMode>
      <div>
        <div className='about-container /about'>
          <div className='about-body'>
            <div className='about-left-container'>
              <img src={Beach}/>
            </div>
            <div className='about-right-container'>
              <h1 data-aos="fade-left">About</h1>
            </div>
          </div>
          <div className='about-footer'>      
            <div className='about-footer-content'>
              <div className='about-footer-grouping'>
                <h2 > The goal is simple: Creating over Relating </h2>
                <p data-aos="fade">
                  I am a Web-Developer specializing in JavaScript, React, Python, HTML5, and CSS/SCSS. I leverage libraries such as jquery, bootstrap, gsap and others 
                  to pair creativety and functionality in a seamless, cohesive experience. 
                </p>
              </div>
              <div className='about-footer-grouping-two'>
                <h2 > An organic journey </h2>
                <p data-aos="fade">
                  I know myself capable of delivering timely, effective work as a member of a team as well as individually.
                  As a team, meeting a goal is a shared task that demands each members utmost integrity for all to succeed.
                </p>
              </div>
              <div className='about-footer-grouping-three'>
              <div className="project-preview-wrapper">
                <div className="project-preview"></div>
              </div>
              <li className="navigation-item">
                <a className="navigation-link navigation-link-1" href="#">
                  <span data-text="More...">More...</span>
                </a>
              </li>
              <div className="project-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default About;