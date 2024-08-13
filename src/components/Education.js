import React from "react";

const education = [
  {
    degree: "Software Engineering",
    university: "Moringa School",
    year: "November 2023 - June 2024",
    // detail: "GPA: 4.0",
  },
  {
    degree: "B.Sc. in Software Engineering",
    university: "University of Eastern Africa, Baraton",
    year: "Sept 2016 - August 2021",
    // detail: "GPA: 3.9",
  },
  {
    degree: "CISCO Networking Academy",
    university: "Kenyatta University",
    year: " January 2016 - August 2016",
    // detail: "GPA: 3.5",
  },
];

const Education = () => {
  return (
    <div className="timeline" id="education">
      <div className="timeline-container">

        {education.map((item, index) => (
          <div key={index} className={`timeline-row ${index%2===0 ? "timeline-left" : "timeline-right" }`}>
            <div className="timeline-content active">
            <h3 className="timeline-heading">{item.degree}</h3>
              <p className="timeline-subheading">{item.university}</p>
              <p className="timeline-duration">{item.year}</p>
              <p className="timeline-detail">{item.detail}</p>
            </div>

            <div className="timeline-content" />
          </div>
        ))}
      </div>
      <div className="timneline-spine"> </div>
    </div>
  );
}

export default Education;
