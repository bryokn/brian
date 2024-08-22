import React from 'react';

// const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const icon = require.context('./images/icon', false, /\.(png|jpe?g|svg)$/);

const experience = [
  {
    position: 'Fullstack Engineer',
    company: 'Wiltel Company',
    duration: 'June 2023 - Present',
    detail: '',
  },
  {
    position: 'Software Developer',
    company: 'Midas Consultancy',
    duration: 'Oct 2022 - July 2023',
    detail: '',
  },
  {
    position: 'Software Developer',
    company: 'REICOTEL GROUP at Unilever Kericho ',
    duration: 'July 2022 - September 2022',
    detail: '',
  },
  {
    position: 'Software Developer Intern/Trainee',
    company: 'KETEPA',
    duration: 'Feb 2022 - June 2022',
    detail: '',
  }
];

const Experience = () => {
  const cvLink = "https://drive.google.com/file/d/1uZFPeQ-3SzY2hOCPYKRWmxrKXaA4xN54/view?usp=sharing";

  const CVButton = () => (

    <a href={cvLink} target="_blank" rel="noopener noreferrer" className="cv-button">
                  <img src={icon('./finger.svg')} alt="Finger" className="finger-icon" />
      Click here to view my detailed CV
    </a>
  );

  return (
    <div className="experience-section" id="experience">
      <div className="timeline">
        <div className="timeline-container">
          {experience.map((item, index) => (
            <div key={index} className={`timeline-row ${index%2===0 ? "timeline-left" : "timeline-right" }`}>
              <div className="timeline-content active">
                <h3 className="timeline-heading">{item.position}</h3>
                <p className="timeline-subheading">{item.company}</p>
                <p className="timeline-duration">{item.duration}</p>
                <p className="timeline-detail">{item.detail}</p>
              </div>
              <div className="timeline-content" />
            </div>
          ))}
        </div>
        <div className="timneline-spine"> </div>
      </div>
      <CVButton />
    </div>
  );


  // return (
  //   <div className="timeline" id="experience">
  //     <div className="timeline-container">

  //       {experience.map((item, index) => (
  //         <div key={index} className={`timeline-row ${index%2===0 ? "timeline-left" : "timeline-right" }`}>
  //           <div className="timeline-content active">
  //             <h3 className="timeline-heading">{item.position}</h3>
  //             <p className="timeline-subheading">{item.company}</p>
  //             <p className="timeline-duration">{item.duration}</p>
  //             <p className="timeline-detail">{item.detail}</p>
  //           </div>

  //           <div className="timeline-content" />
  //         </div>
  //       ))}
  //     </div>
  //     <div className="timneline-spine"> </div>
  //   </div>
  // );
}

export default Experience;
