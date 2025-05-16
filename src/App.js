import React from 'react';
import './app.css';
import NavBar from './NavBar.js';
import projects from './data/projects.js';
import ProjectCard from './components/ProjectCard.js';

function App() {
    return (
        <>
            <NavBar />
            <div className="container-wrapper">
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
