import React from 'react';
import './NavBar.css';
import Origin from './Origin';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg" id='navBar'>
    <div className="container-fluid" >
      {/* <a className="navbar-brand" href="#">Portfolio</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about-me-container">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#projects-container">Works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#contact-details">Contact</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar;
