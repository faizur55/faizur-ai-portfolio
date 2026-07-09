import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";

import { SiLeetcode, SiX } from "react-icons/si";

import { contact } from "../data/contact";
import "../styles/ContactHub.css";

export default function ContactHub() {
  const socials = [
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect Professionally",
      link: contact.linkedin,
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "View Projects",
      link: contact.github,
    },
    {
      icon: <SiLeetcode />,
      title: "LeetCode",
      value: "Problem Solving",
      link: contact.leetcode,
    },
    {
      icon: <SiX />,
      title: "X",
      value: "Follow Updates",
      link: contact.twitter,
    },
  ];

  return (
    <div className="contacthub">

      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >

        <div className="info-card">

          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <a href={`mailto:${contact.email}`}>
            {contact.email}
          </a>

        </div>

        <div className="info-card">

          <FaPhoneAlt className="contact-icon" />

          <h3>Phone</h3>

          <a href={`tel:${contact.phone}`}>
            {contact.phone}
          </a>

        </div>

        <div className="info-card">

          <FaMapMarkerAlt className="contact-icon" />

          <h3>Location</h3>

          <span>{contact.location}</span>

        </div>

        <div className="info-card">

          <FaFileDownload className="contact-icon" />

          <h3>Resume</h3>

          <a
  href={contact.resume}
  download="Faizur_Rahaman_Resume.pdf"
>
  📄 Download Resume
</a>

        </div>

      </motion.div>

      <motion.div
        className="social-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .2 }}
        viewport={{ once: true }}
      >

        <h3>Connect With Me</h3>

        <div className="social-grid">

          {socials.map((item) => (

            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >

              <div className="social-icon">

                {item.icon}

              </div>

              <div>

                <h4>{item.title}</h4>

                <p>{item.value}</p>

              </div>

            </a>

          ))}

        </div>

      </motion.div>

      <motion.div
        className="availability"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .35 }}
        viewport={{ once: true }}
      >

        <h3>

          🟢 Currently Open To

        </h3>

        <div className="availability-grid">

          {contact.availability.map((item) => (

            <span
              key={item}
              className="availability-pill"
            >
              {item}
            </span>

          ))}

        </div>

      </motion.div>

      <motion.div
        className="contact-actions"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .5 }}
        viewport={{ once: true }}
      >

<a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  📧 Send Email
</a>
<button
  className="secondary-btn"
  onClick={() => {
    navigator.clipboard.writeText(contact.email);
    alert("Email copied to clipboard!");
  }}
>
  📋 Copy Email
</button>
        <a
  href={contact.resume}
  download="Faizur_Rahaman_Resume.pdf"
  className="secondary-btn"
>
  📄 Download Resume
</a>

      </motion.div>

    </div>
  );
}