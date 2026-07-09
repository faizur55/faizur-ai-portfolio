import "./../styles/Skills.css";
import { skills } from "../data/skills";
import { motion } from "framer-motion";
import { useState } from "react";

import SkillPopup from "./SkillPopup";
import SkillJourney from "./SkillJourney";

export function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(null);

  const [showJourney, setShowJourney] = useState(false);

  return (

    <section className="skills" id="skills">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .3 }}
        viewport={{ once: true }}
      >
        Technologies I build intelligent systems with
      </motion.p>

      <div className="skills-container">

        {skills.map((category, index) => (

          <motion.div
            key={index}
            className="skills-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .15 }}
            viewport={{ once: true }}
          >

            <h3>

              <span>{category.icon}</span>

              {category.category}

            </h3>

            <div className="skills-list">

              {category.items.map((skill, i) => (

                <div
  key={i}
  className="skill-pill"
  onClick={() => {
    setSelectedSkill(skill);
    setShowJourney(false);
  }}
>

                  {skill.name}

                </div>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

      <SkillPopup
    selectedSkill={selectedSkill}
    setSelectedSkill={setSelectedSkill}
    showJourney={showJourney}
    setShowJourney={setShowJourney}
/>

      <SkillJourney
  selectedSkill={selectedSkill}
  showJourney={showJourney}
  setShowJourney={setShowJourney}
/>

    </section>

  );

}

export default Skills;