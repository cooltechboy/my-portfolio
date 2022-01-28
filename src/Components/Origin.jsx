import React from 'react';
import image from './kolkata.jpg';
import './Origin.css';

const Origin = () => {
  return( <div>
            <div className='origin-container'>
            <p id="origin-text">I am from...</p>
            <img src={image} className='origin-image'></img>
            <p id='location'>West Bengal, India</p>
            </div>
            <div id='about-me-container'>
                <h1 id='about-me-heading'>A bit about me</h1>
                <p id='about-me-text'>I am an organised overthinker. I have a number of interests in different things
                ranging from writing, travelling, cooking to developing UIs or basically playing with tech.
                Though I had a special obsession with tech from childhood, I found my heart in various other things too.
                I loved painting landscapes, travelling to different places, exploring various positive inventions of science, etc.<br></br>
                However, coming to my overthinking part. I call myself an overthinker because I can never stop my mind to think 
                about numerous outcomes of any situation. It always keeps on moving on branch-like paths. And, I added the adjective 'organised' 
                because my overthinking always helps me take the best decision in the quickest interval.<br></br><br></br>
                </p>
                <div className='portfolio-container'>
                My Academic and Professional portfolio looks like -<br></br><br></br>
                <strong className='underlined-heading'>Academic Qualifications</strong><br></br><br></br>
                <ul>
                    <li className='portfolio-list'>
                        <a className='portfolio-heading' href='https://uit.buruniv.ac.in/'>University Institute of Technlogy</a>
                        <p className='portfolio-desc'>I completed my Bachelors in Electrical Engineering from here during 2017-2021</p>    
                    </li>
                    <li className='portfolio-list'>
                        <a className='portfolio-heading' href='https://burdwantownschool.co.in/'>Burdwan Town School</a>
                        <p className='portfolio-desc'>I completed my schooling with specialization in Science from here during 2004-2017</p>    
                    </li>    
                </ul>
                <strong className='underlined-heading'>Professional Experience</strong><br></br><br></br>
                <ul>
                    <li className='portfolio-list'>
                        <a className='portfolio-heading' href='https://seahawkmedia.com/'>Content Writer at Seahawk Media</a>
                        <p className='portfolio-desc'>(April 2021 - November 2021)<br></br>I have written SEO Blogs for numerous clients from diverse genres 
                        such as Telecom Service Provider, Patent Lawyer, Timeshare Cancellation Companies, Interior Designers, Roofing Companies, 
                        Solar Service Providers,etc.
                        </p>
                    </li>
                    <li className='portfolio-list'>
                        <a className='portfolio-heading'>Front End Web Developer at WebChal</a>
                        <p className='portfolio-desc'>(November 2020 - November 2021)<br></br>It is a small group of my friends who develop websites and web applications. 
                        I helped them by developing the front-end part of those websites and web applications mostly using HTML, CSS, and 
                        a little bit of React JS.
                        </p>
                    </li>
                    <li className='portfolio-list'>
                        <a className='portfolio-heading' href='https://bloodydonuts.in/'>Content Writer at Bloody Donuts</a>
                        <p className='portfolio-desc'>(January 2021 - February 2021)<br></br>It is an internship where I have written stories on different topics using my own vision. One of them is attached here -
                        <a href='https://bloodydonuts.in/swimming-in-an-endless-well/'>https://bloodydonuts.in/swimming-in-an-endless-well/</a>. I hope you all will like it.
                        </p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Origin;