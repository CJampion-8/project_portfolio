import githubLogo from "../images/github_logo.png";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <a href={project.link} target="_blank" rel="noreferrer" className="project-image-link">
                <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <div className="project-info">
                    <div className="title-container">
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-title">{project.title}</a>                        {project.link && <a href={project.github} target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="GitHub" className="github-icon" />
                        </a>}
                    </div>
                    <p className="project-tools">
                        {project.tools.map((tool, i) => (
                        <span key={i}>
                            {tool}{i < project.tools.length - 1 && ", "}
                        </span>
                    ))}
                    </p>
                <hr />
                <p className="project-description">{project.description}</p>
            </div>
        </div>
    );
}
export default ProjectCard;