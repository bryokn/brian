import React from 'react';
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom';
import './Projects.css';

// Create a context for images
const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const icon = require.context('./images/icon', false, /\.(png|jpe?g|svg)$/);

const projects = [
  {
    title: 'Flapocalypse Game',
    technologies: ['React Native', 'TypeScript', 'Expo'],
    summary: 'This is a React Native game built using React Native, TypeScript. It is a clone of Flappy Bird.',
    // screenshot: './images/flapocalypse.png',
    github: 'https://github.com/bryokn/Flapocalypse',
    // liveURL: 'https://koustubhsahu.github.io/Personal-Website-Template/',
  },
  {
    title: "Personal Journal App",
    technologies: ['React Native','TypeScript', 'Python', 'PostgreSQL', 'Expo'],
    summary: 'This is a mobile application built with React Native and Expo that allows users to create, manage, and categorize personal journal entries. ',
    github: 'https://github.com/bryokn/journal-app',
  },
  {
    title: "ClassiConnect",
    technologies: ['JavaScript', 'Next.js', 'CSS'],
    summary: 'This is a web application built using Next.js and JavaScript. It allows users to browse and purchase products from a variety of categories. ',
    github: 'https://github.com/bryokn/ClassiConnect',
  },
  {
    title: "E-Commerce App (Liquor Cave)",
    technologies: ['React', 'Chakra UI', 'CSS', 'Formik', 'HTML'],
    summary: 'This is a Liquor E-Commerce web application built using React, Formik, Chakra UI, HTML, and CSS. The app allows users to browse and purchase a variety of liquors online.',
    github: 'https://github.com/bryokn/ecomerce-app',
  },
  {
    title: "Paw-Prints",
    technologies: ['Python', 'JavaScript', 'Flask', 'SQLite'],
    summary: 'The Pet Adoption Application is a web-based application that allows users to browse and adopt pets. It provides a user-friendly interface for searching and viewing available pets, as well as functionality for creating new adoptions.',
    github: 'https://github.com/bryokn/Paw-Prints',
  },
  {
    title: "Sports League",
    technologies: ['Python', 'SQLAlchemy'],
    summary: 'This is a CLI application built with Python and SQLAlchemy to manage a grassroots Hockey league.',
    github: 'https://github.com/bryokn/sports-league',
  }
  
];

// function getProjectImage(imageName) {
//   // const obj = {backgroundImage: `url(./images/${imageName})`};
//   const obj = {backgroundImage: `url(${images(`./${imageName}`)})`};
//   return obj;
// }

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <h2>Projects</h2>
      <div className="project-container">

        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div 
              className="project-screenshot"
              style= {project.screenshot ? { backgroundImage: `url(${images(`./${project.screenshot}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {backgroundColor: 'rgba(240,240,240,0.5)'}}
              aria-label={project.title}
            >
              <h2>{project.screenshot ? "" : project.title}</h2>
              <span class="project-summary">{project.summary}
              <span class="project-links">
                <Router>
                  {project.liveURL ? <RouterLink to={project.liveURL} target="_blank"><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink> : null}
                  {project.github ? <RouterLink to={project.github} target="_blank"><img src={icon(`./github.svg`)} alt="github"/></RouterLink> : null}
                  {/* <img src={icon(`./live-link.svg`)} alt="live-link"/> */}
                  {/* <img src={icon(`./code.svg`)} alt="code"/> */}
                  {/* <RouterLink to={project.live}><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink>
                  <RouterLink to={project.live}><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink> */}
                </Router>
              </span>
              </span>
              
            </div>
            <div className="project-content" >
              <h3 class="project-title">{project.title}</h3>
              {/* <p class="project-summary">{project.summary}</p> */}
              <div class="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index} class="project-technology">{technology}</span>
                ))}
              </div>            
            </div>
          </div>
        ))}
      </div>
      <a 
        href="https://github.com/bryokn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-btn"
      >
        <img src={icon('./github.svg')} alt="GitHub" className="github-icon" />
        <span>Click here to check out more projects on my G I T H U B page. </span>
      </a>
    </div>
    
  );
};

export default Projects;
