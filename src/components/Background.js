import React, {useState} from 'react';
import Education from './Education';
import Experience from './Experience';
import Animation from './Animation';
import './Background.css';

  
  const Background = () => {
    const [activeView, setActiveView] = useState("experience");
    return (
      <div className="background section" id="background">
        <span class="background-marker" />
        <div className="background-container">
          <div className="background-nav">
            <button className={activeView === "experience" ? "selected" : ""} onClick={() => setActiveView("experience")}>EXPERIENCE</button>
            <button className={activeView === "education" ? "selected" : ""} onClick={() => setActiveView("education")}>EDUCATION</button>
          </div>
          <div className="background-content">
            <div className="background-view"> 
              {activeView === "experience" ? <Experience /> : <Education />}
            </div>
            <div className="background-animation">
              <Animation fileName="contact" />
            </div>
          </div>
        </div>
      </div>
    );

  };
  
  export default Background;
  
  