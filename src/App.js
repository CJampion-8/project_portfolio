import React from 'react';
import './app.css';
import NavBar from './NavBar.js';
import projects from './data/projects.js';

function App() {
    return (
    <>
        <div className="App">
            <NavBar />
        </div>
        <div className="container-wrapper">
            <div className="container">
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>

                            <a href={project.link} className="project-image-link">
                                <img src={project.image} alt={project.title} className="project-image"/>
                            </a>

                            <div className="project-info">
                                <a href={project.link} className="project-title">{project.title}</a>
                                <hr></hr>

                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    );
}

export default App;