import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { GoFile } from 'react-icons/go';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div id="Footer" className="container-footer">
      <div className="container-social-links">
        <a
          href="https://www.linkedin.com/in/yogeshmoradiya/"
          rel="noreferrer"
          target="_blank"
          className="link-icon"
        >
          <AiOutlineLinkedin className="icon" loading='lazy' alt="linkedin icon"/>
        </a>

        <a
          href="https://github.com/imyoga"
          rel="noreferrer"
          target="_blank"
          className="link-icon"
        >
          <AiOutlineGithub className="icon" loading='lazy' alt="github icon"/>
        </a>
        <a
          href="https://drive.google.com/file/d/1uFhzlxC6hRraTQZX6a1g9CRqXq-toAzV/view"
          rel="noreferrer"
          target="_blank"
          className="link-icon"
        >
          <GoFile className="icon" loading='lazy' alt="resume icon"/>
        </a>
      </div>
      <div className='container-footer-notes'>
        <p>Handcrafted by me @ 2022</p>
        <p>
          Made with <span>React 18</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
