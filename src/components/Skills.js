import React from "react";
import Animation from "./Animation";
import "./Skills.css";

// Create a context for images
const icon = require.context('./images/icon', false, /\.(png|jpe?g|svg)$/);

const skillsSection = [
  {name: "FRONTEND", class:"frontend", animation: "frontend.json", 
    skills: [{name: "HTML", icon: "html.svg"}, {name: "CSS", icon: "css.svg"}, {name: "JavaScript", icon: "js.svg"}, {name: "React.js", icon: "react.svg"}, {name: "React Native", icon: "reactnative.svg"}, {name: "TypeScript", icon: "typescript.svg"}] },
  {name: "BACKEND", class: "backend", animation :"backend.json", 
    skills: [{name: "Node.js", icon:"node.svg"}, {name: "Express.js", icon:"express.svg"}, {name: "Python", icon: "python.svg"}, {name: "Flask", icon: "flask.svg"}, {name: "Django", icon: "django.svg"}, {name: "PHP", icon: "php.svg"}] },
  {name: "DATABASE", class: "database", animation: "database.json", 
    skills: [{name: "PostgreSQL", icon: "postgre-sql.svg"}, {name: "MySQL", icon: "mysql.svg"}, {name: "MongoDB", icon: "mongodb.svg"}, {name: "MS Access", icon: "ms-access.svg"}] },
  {name: "OTHER TECH...", class: "other-tech", animation: "other-tech.json", 
    skills: [{name: "Git", icon: "git.svg"}, {name: "GitHub", icon: "github.svg"}, {name: "Expo", icon: "expo.svg"}, {name: "Postman", icon: "postman.svg"}, {name: "SpringBoot", icon: "spring.svg"}] }
  ];

  

function Skills (props) {
  return (
    <div className="skills section" id="skills">
      <div className="skills-container">
        <div className="skills-grid">
        {skillsSection.map((section, index) => (
          <div key={index} className={`${section.class} skills-section`}>
            <Animation fileName={section.animation} width="5rem" />          
            <span className="skills-section-title">{section.name}</span>
            <table> 
            {section.skills.map((skill, index) => (
              <tr>
                <td className="skill-logo">
                  
                  <img src={icon(`./${skill.icon}`)} alt={skill.name}/>
                </td>
              <td key={index}>
                {skill.name}
              </td>
              </tr>
            ))}
            </table> 
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}


export default Skills;
