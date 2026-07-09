import "./../styles/Hero.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { heroSkills } from "../data/skills";
export function Hero() {
  return (
    <section className="hero" id="hero">
        <div className="hero-glow"></div>

      <div className="hero-content">

        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI ENGINEER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Faizur Rahaman Shaik
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Building Intelligent Systems
          <br />
          for the next generation of AI.
        </motion.h2>

        <motion.div
          className="typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <TypeAnimation
            sequence={[
              "AI Agents",
              2000,
              "RAG Systems",
              2000,
              "Transformer Models",
              2000,
              "Production LLM Apps",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
  className="hero-buttons"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4 }}
>

  <button
    className="primary-btn"
    onClick={() =>
      document
        .getElementById("projects")
        ?.scrollIntoView({
          behavior: "smooth",
        })
    }
  >
    View Projects
  </button>

  <button
    className="secondary-btn"
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
        })
    }
  >
    Contact Me
  </button>

</motion.div>
        <motion.div
  className="hero-skills"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.8 }}
>
  {heroSkills.map((skill, index) => (
    <div
      key={skill}
      className="skill-pill"
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      {skill}
    </div>
  ))}
</motion.div>

      </div>

    </section>
  );
}