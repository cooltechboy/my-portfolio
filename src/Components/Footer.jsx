import React from 'react';
import './Footer.css';

const clickToCopy = () => {
    console.log('email clicked');
}

const Footer = () => {
  return(<div id='contact-details'>
            <h1 className='footer-heading'>Wanna Give Me Some Feedback?</h1>
            <p className='feedback-text'>Feedbacks and Constructive criticism are everyone's best friends.
            And, I am always open to hear them.<br></br>
            For a general enquiry, send an email to <strong id='my-email' onClick={clickToCopy}>ankurchoudhury54@gmail.com</strong><br></br>
            For a detailed enquiry, fill out the form below.</p>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Your Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Your Questions</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
    )
};

export default Footer;

