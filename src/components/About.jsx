import "./../styles/About.css";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <p className="section-tag">
          WHO I AM
        </p>

        <h2>
          I don't just use AI.
          <br />
          I engineer intelligent systems.
        </h2>

        <p className="about-text">
          From transformer internals to production-ready
          Retrieval-Augmented Generation systems,
          I enjoy building AI software that is reliable,
          explainable, and useful.
        </p>

        <div className="about-grid">

          <motion.div
            className="about-card card"
            whileHover={{ y: -8 }}
          >
            <h3>🧠 Think Deep</h3>

            <p>
              I enjoy understanding the mathematics
              and engineering behind modern AI instead
              of treating models like black boxes.
            </p>

          </motion.div>

          <motion.div
            className="about-card card"
            whileHover={{ y: -8 }}
          >
            <h3>⚡ Ship Fast</h3>

            <p>
              Working software teaches more than
              unfinished ideas. I focus on building,
              testing, and improving continuously.
            </p>

          </motion.div>

          <motion.div
            className="about-card card"
            whileHover={{ y: -8 }}
          >
            <h3>🚀 Keep Learning</h3>

            <p>
              Every project pushes me into something
              new—whether it's LangGraph, RAG,
              transformers, or cloud deployment.
            </p>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}