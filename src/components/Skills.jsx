import React from 'react';
import Image from './Image';
import { frontEnd, backEnd, tools } from './skill-list';
import '../styles/Skills.css';

const Skills = (props) => {
  return (
    <div id={props.id} className="container-skills">
      <h2 className="title-skill">Skills</h2>
      <p className="title-quote">“Building my skills, Not resume”</p>

      <div className="container-cards-skills">
        <ul className="card-skills">
          <li>
            <div className="title-card">Front End</div>
          </li>
          <ul className="container-skill-items">
            {frontEnd.map((skill, index) => {
              return (
                <li key={index} className="container-skill-name-image">
                  <Image imageName={skill[0]} className="image-skill" />
                  <div className="title-skill-image">{skill[1]}</div>
                </li>
              );
            })}
          </ul>
        </ul>

        <ul className="card-skills">
          <li>
            <div className="title-card">Tools</div>
          </li>
          <ul className="container-skill-items">
            {tools.map((skill, index) => {
              return (
                <li key={index} className="container-skill-name-image">
                  <Image imageName={skill[0]} className="image-skill" />
                  <div className="title-skill-image">{skill[1]}</div>
                </li>
              );
            })}
          </ul>
        </ul>

        <ul className="card-skills">
          <li>
            <div className="title-card">Back End</div>
          </li>
          <ul className="container-skill-items">
            {backEnd.map((skill, index) => {
              return (
                <li key={index} className="container-skill-name-image">
                  <Image imageName={skill[0]} className="image-skill" />
                  <div className="title-skill-image">{skill[1]}</div>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
      
    </div>
  );
};

export default Skills;
