import { motion, AnimatePresence } from "framer-motion";
import { journey } from "../data/journey";
import "../styles/SkillJourney.css";


export default function SkillJourney({
  selectedSkill,
  showJourney,
  setShowJourney,
}) {
  if (!selectedSkill) return null;

  const timeline = journey[selectedSkill.name] || [];

  return (
    <AnimatePresence>
      {showJourney && (
        <motion.div
          className="journey-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowJourney(false)}
        >
          <motion.div
            className="journey-container"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-journey"
              onClick={() => setShowJourney(false)}
            >
              ✕
            </button>

            <h2>{selectedSkill.name} Learning Journey</h2>

<hr className="journey-divider" />



            {timeline.length === 0 ? (
              <div className="journey-empty">
                <h3>Journey Coming Soon 🚀</h3>
                <p>
                  This learning timeline is currently being documented.
                </p>
              </div>
            ) : (
              <div className="journey-timeline">
                {timeline.map((step, index) => (
                  <motion.div
                    key={index}
                    className="journey-step"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.18,
                      duration: 0.5,
                    }}
                  >
                    <div className="journey-dot"></div>

                    <div className="journey-content">
                      <div className="journey-year">
                        {step.year}
                      </div>

                      <h3>{step.title}</h3>

                      <p>{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}