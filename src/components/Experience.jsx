import "./../styles/Experience.css";
import { experience } from "../data/experience";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="experience" id="experience">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <p className="section-tag">
          EXPERIENCE
        </p>

        <h2 className="experience-title">
          My Journey Into AI
        </h2>

        <div className="timeline">

          {experience.map((item, index) => (

            <motion.div
              key={item.id}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <div className="timeline-header">

  <span className="timeline-icon">

    {item.icon}

  </span>

  <span className="timeline-year">

    {item.year}

  </span>

</div>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
                <div className="experience-skills">

  {item.skills.map((skill, index) => (

    <span
      key={index}
      className="experience-pill"
    >
      {skill}
    </span>

  ))}

</div>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}