function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <a href={project.link} className="project-image-link">
                <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <div className="project-info">
                    <a href={project.link} className="project-title">{project.title}</a>
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