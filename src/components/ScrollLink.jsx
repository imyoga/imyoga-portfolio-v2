import React from 'react';
import { Link as Links } from 'react-scroll';
import * as Scroll from 'react-scroll';
import '../styles/ScrollLink.css';
import '../styles/Navbar.css';

const ScrollLink = (props) => {
  // console.log(props);

  function clickHandler() {
    // console.log('clicked on scroll link');
    if (props.ontoggle) {
      props.ontoggle();
    }

    if (props.scrollToTop === 1) {
      Scroll.animateScroll.scrollToTop();
    }
  }

  return (
    <Links
      to={props.scrollTo === 'Hero' ? '' : props.scrollTo}
      activeClass="active"
      className={props.classes}
      spy={true}
      smooth={true}
      offset={props.offset ?? -56}
      duration={500}
      onClick={clickHandler}
    >
      {props.children}
    </Links>
  );
};

export default ScrollLink;
