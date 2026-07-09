import { motion } from "framer-motion";
import { projects } from "../data/projects";
import "../styles/SkillPopup.css";

export default function SkillPopup({
  selectedSkill,
  setSelectedSkill,
  setShowJourney,
}) {
  if (!selectedSkill) return null;

  const relatedProjects = projects.filter((project) =>
    project.tech.includes(selectedSkill.name)
  );

  return (
    <motion.div
      className="skill-popup"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close Button */}
      <button
        className="popup-close"
        onClick={() => {
          setSelectedSkill(null);
          setShowJourney(false);
        }}
      >
        ✕
      </button>

      {/* Skill Title */}
      <h3>{selectedSkill.name}</h3>

      {/* Year */}
      <p>
        <strong>Since:</strong> {selectedSkill.year}
      </p>

      {/* Description */}
      <p>{selectedSkill.description}</p>

      <hr />

      {/* Related Projects */}
      <h4>Used In Projects</h4>

      <div className="project-list">
        {relatedProjects.length > 0 ? (
          relatedProjects.map((project) => (
            <div className="project-item" key={project.id}>
              <span className="green-dot"></span>
              {project.title}
            </div>
          ))
        ) : (
          <p>No related projects yet.</p>
        )}
      </div>

      {/* Journey Button */}
      <button
  className="journey-btn"
  onClick={() => {
    console.log("Journey button clicked");
    setShowJourney(true);
  }}
>
  🚀 View Learning Journey
</button>
    </motion.div>
  );
}