import "./../styles/Projects.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((current + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent(
      (current - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="projects" id="projects">

      <p className="section-tag">
        SELECTED WORK
      </p>

      <h2 className="projects-title">
        Projects that taught me
        <br />
        how modern AI systems are built.
      </h2>

      <div className="slider-controls">

        <button onClick={prevProject}>
          ←
        </button>

        <button onClick={nextProject}>
          →
        </button>

      </div>

      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.45 }}
        >

          <div
            onClick={() =>
              setSelectedProject(projects[current])
            }
            style={{ cursor: "pointer" }}
          >

            <ProjectCard
              project={projects[current]}
            />

          </div>

        </motion.div>

      </AnimatePresence>

      <div className="slider-dots">

        {projects.map((_, index) => (

          <span
            key={index}
            className={
              index === current
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

      <ProjectModal
        project={selectedProject}
        setSelectedProject={setSelectedProject}
      />

    </section>
  );
}

export default Projects;