import { motion, AnimatePresence } from "framer-motion";
import "../styles/ProjectModal.css";

export default function ProjectModal({
  project,
  setSelectedProject,
}) {
  return (
    <AnimatePresence>

      {project && (

        <motion.div
          className="project-overlay"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          onClick={() => setSelectedProject(null)}
        >

          <motion.div

            className="project-modal"

            initial={{
              opacity: 0,
              scale: .92,
              y: 50,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: .92,
              y: 40,
            }}

            transition={{
              duration: .35,
            }}

            onClick={(e)=>e.stopPropagation()}
          >

            <button
              className="project-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <img
              src={project.image}
              alt={project.title}
              className="project-banner"
            />

            <div className="project-content">

              <span className="project-number">
                {project.number}
              </span>

              <h2>{project.title}</h2>

              <h4>{project.subtitle}</h4>

              <p className="project-description">
                {project.description}
              </p>

              <section>

                <h3>🚨 Problem</h3>

                <p>{project.problem}</p>

              </section>

              <section>

                <h3>💡 Solution</h3>

                <p>{project.solution}</p>

              </section>

              <section>

                <h3>🏗 Architecture</h3>

                <div className="project-tags">

                  {project.architecture.map((item)=>(
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </section>

              <section>

                <h3>⚙ Features</h3>

                <ul>

                  {project.features.map((item)=>(
                    <li key={item}>{item}</li>
                  ))}

                </ul>

              </section>

              <section>

                <h3>⚡ Challenges</h3>

                <ul>

                  {project.challenges.map((item)=>(
                    <li key={item}>{item}</li>
                  ))}

                </ul>

              </section>

              <section>

                <h3>🛠 Tech Stack</h3>

                <div className="project-tags">

                  {project.tech.map((tech)=>(
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </section>

              <div className="project-buttons">

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  {project.demo === "#" ? (

    <span className="coming-soon">
      🚀 Demo Coming Soon
    </span>

  ) : (

    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
    </a>

  )}

</div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}