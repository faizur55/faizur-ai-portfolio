import "./../styles/ProjectCard.css";

import { motion } from "framer-motion";

export function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{
        y: -12,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <p className="project-number">
          {project.number}
        </p>

        <h2>{project.title}</h2>

        <h3>{project.subtitle}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="tech-stack">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="tech-pill"
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={project.demo}
          >
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}