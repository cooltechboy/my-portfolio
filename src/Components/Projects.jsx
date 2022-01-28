import React from 'react';
import './Projects.css';

const Projects = () => {
  return(<div id='projects-container'>
            <h1 className='work-heading'>My Work</h1>
            <p className='work-text'>As my portfolio shows, I have tried my hands on different things that have 
            attracted me in different points of time. Here, I am showcasing a few of my Content works and Development works.
            </p><br></br><br></br>
            <h2 className='work-heading'>Content Works</h2>
            <a href='https://seahawkmedia.com/blog/how-many-wordpress-plugins-should-you-install/' className='blog-links'>How Many WordPress Plugins Should You Install?</a>
            <a href='https://seahawkmedia.com/blog/everything-developers-need-to-know-about-figma/' className='blog-links'>Everything Developers Need To Know About Figma</a>
            <a href='https://seahawkmedia.com/compare/dreamhost-vs-bluehost/' className='blog-links'>DreamHost vs. BlueHost</a>
            <a href='https://seahawkmedia.com/blog/godaddy-vs-hostgator/' className='blog-links'>GoDaddy vs. HostGator</a>
            <a href='https://seahawkmedia.com/compare/webflow-vs-wordpress-which-is-the-best/' className='blog-links'>WebFlow vs. WordPress</a>
            <a href='https://seahawkmedia.com/compare/blogger-vs-wordpress-which-is-better/' className='blog-links'>Blogger vs. WordPress</a>
            <h2 className='work-heading'>Development Works</h2>
        </div>
    )
};

export default Projects;
