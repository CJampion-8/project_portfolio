import React from 'react';
import './app.css';
import NavBar from './Navbar.js';
import projects from './data/projects.js';
import ProjectCard from './components/ProjectCard.js';

function App() {
    return (
        <>
            <NavBar />
            <div className="container-wrapper">
                <div className="about">
                    <div className="about-title">
                        <p>About Me</p>
                    </div>
                    <p className="about-content">
                        <hr/>
                            I'm a front-end developer with a background in Cyber Security and IT. I build responsive, user-friendly 
                            websites using React, HTML, and CSS. I'm passionate about clean design, smooth user experiences, and I 
                            am always looking to learn through experience. I'm open to freelance projects or full-time opportunities.
                    </p>
                </div>
                <div className="container">
                    <div className="project-list">
                        {projects.map((project) => (
                            <ProjectCard 
                                key={project.title} 
                                project={project} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
