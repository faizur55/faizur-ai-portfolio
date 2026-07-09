import "./../styles/Contact.css";
import { motion } from "framer-motion";
import ContactHub from "./ContactHub";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <p className="section-tag">
          CONTACT
        </p>

        <h2 className="contact-title">
          Let's Build Something Amazing Together
        </h2>

        <p className="contact-subtitle">
          Whether it's AI Engineering, LLMs, Backend Systems,
          internships, or simply discussing ideas—
          I'm always happy to connect.
        </p>

      </motion.div>

      <ContactHub />

    </section>
  );
}