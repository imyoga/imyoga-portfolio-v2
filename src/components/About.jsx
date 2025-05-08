import React from 'react';
import '../styles/About.css';

const About = (props) => {
  return (
    <div id={props.id} className="container-about-background">
      <div className="container-about">
        <h2>ABOUT</h2>

        <div className="card-about">
          <p>
            I’m a Web Developer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I'm focused on building{' '}
            <span>accessible</span>, <span>SEO-friendly</span> and human-centred products
            with serverless providers like AWS.
          </p>
          <p>
            Since I took a leap and trained in modern web app development at Par
            Info-tech, I have been <span>promoted</span> to put my hands on more advanced
            projects, while bringing ambitious ideas and a <span>positive attitude</span>{' '}
            to every challenge.
          </p>

          <p>
            When I'm not coding, I'm usually going for a walk, trying out a new recipe, or
            reading spiritual content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
