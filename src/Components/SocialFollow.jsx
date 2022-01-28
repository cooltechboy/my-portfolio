import React from "react";
import './SocialFollow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <p className='social-text'>To know more about me, connect with me on 
      <a href="https://www.linkedin.com/in/ankur-choudhury-50a178111/"
        className="linkedin-social">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <p className="copyright-text">&copy; Ankur Choudhury</p>
      </p>
    </div>
  )
}