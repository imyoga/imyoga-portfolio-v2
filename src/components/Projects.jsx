import React from 'react';
import ProjectBuilder from './ProjectBuilder';
import '../styles/Projects.css';

let projects = [
  {
    title: 'Par Infotech',
    description: `A business website provides an online presence so people can learn about a company, its employees, products, services, and culture. Responsive, accessible and SEO friendly.`,
    technologies: ['React', 'Node/Express'],
    collobraters: ['Bhoomi B, Nick R'],
    note: `This project is still in development. A visitors may see some bugs. Hosted on AWS amplify`,
    links: ['See Live', 'https://parinfotech.com/'],
    embedId: 'FhOIZBTjbGs',
  },
  {
    title: 'Dr. Zio',
    description: `A marketing website that helps the small business convert visitors into customers.`,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    collobraters: ['Nitin R'],
    note: `We're adding fetures to this project. It's hosted on AWS with Hostinger.`,
    links: ['See Live', 'https://drzio.com/'],
    embedId: 'E2rZpv3i3jE',
  },
  {
    title: 'Super Market',
    description: `Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.`,
    technologies: ['React', 'APIs', 'CSS', 'Stripe Payment'],
    collobraters: ['N/a'],
    note: `This app is hosted on Netlify via Github.`,
    links: [
      'See Live',
      'https://super-market-react18.netlify.app',
      'Source Code',
      'https://github.com/imyoga/super-market-react18',
    ],
    embedId: 'M4HztWPzEmY',
  },
  {
    title: 'My Bank',
    description: `This project has a prototype mode. If you click on a non-clickable area, the clickable areas will flash.`,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    collobraters: ['N/a'],
    note: `This app is hosted on Github Pages.`,
    links: [
      'See Live',
      'https://imyoga.github.io/my-bank/',
      'Source Code',
      'https://github.com/imyoga/my-bank',
    ],
    embedId: 'Xd8AxLZr-88',
  },
];

const Projects = (props) => {
  return (
    <div id={props.id} className="container-projects">
      <h1 className="title-work">My Recent Work</h1>
      <p className="description-work">
        Here are a few most recent projects I've contributed to.
      </p>
      <ProjectBuilder project={projects[0]} />
      <ProjectBuilder project={projects[1]} />
      <ProjectBuilder project={projects[2]} />
      <ProjectBuilder project={projects[3]} />
    </div>
  );
};

export default Projects;
