import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div >
    
   <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav> 

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Joshua Cassidy.</h1>
            <h3>I'm a Dublin based <span>Computer Science </span>, <span>Student</span> and <span>Programmer</span> that is currently a web application developer. Let's <a className="smoothscroll" href="#about">start scrolling</a>
            and learn more <a className="smoothscroll" href="#about">who I am</a>.</h3>
            <hr />
            <ul className="social">
               <li><a href="#"><i className="fa fa-facebook"></i></a></li>
               <li><a href="#"><i className="fa fa-twitter"></i></a></li>
               <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
               <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i className="fa fa-instagram"></i></a></li>
               <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
               <li><a href="#"><i className="fa fa-skype"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
          
      </div>
    );
  }
}

export default Header;
