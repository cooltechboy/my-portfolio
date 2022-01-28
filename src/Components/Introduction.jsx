import React from 'react';
import image from './my image.jpg';
import './Introduction.css';

export default function Introduction() {
  return( <div className='intro'>
            <p id='introText'>Hi,<br></br> my name is Ankur Choudhury. I love to build simple, beautiful, and interactive UIs. 
                I am always keen to use my love for colors, vibrant visuals, and heart-touching vibes to 
                add life to my creations. I hope you will like to know more about me. So...
                LET'S EXPLORE!
            </p>
            <img src={image} className='my-image'></img>
        </div>
    )
}
