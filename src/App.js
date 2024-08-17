import React from 'react';
import Navbar from './components/Navbar';
import Animation from './components/Animation';
import Connect from './components/Connect';
import Skills from './components/Skills';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/fonts.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />      
      <Skills />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
}

const Home = () => (
  <div className="home section" id="home">
    <div className="home-content">
      <div className="summary align-right">
        <div className="summary-content">
          
          <h1>
            Hi, I'm Kipkirui Brian.
          </h1>
          <p>
            I am a motivated and skilled software developer with experience in building web applications, CLI tools, and working with various programming languages and frameworks. I am passionate about creating user-friendly and efficient solutions through coding. I am a self-starter with the ability to take initiative when it comes to planning, scheduling, and executing work within given deadlines.
          </p>
          
          <Connect linkedin="http://www.linkedin.com/kipkiruibrian" github="https://github.com/bryokn" contact="mailto:kipkiruibn@gmail.com"
          resume="https://drive.google.com/file/d/12DqaCEvSkfvLjpQd776-aFvBMAs20o7F/view?usp=sharing"/>
          
        </div>
      </div>
      <Animation fileName="home.json"/>
    </div>
    <div id="skills-marker"/>
  </div>
);



export default App;
