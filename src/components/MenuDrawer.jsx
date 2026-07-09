import { motion, AnimatePresence } from "framer-motion";
import "../styles/MenuDrawer.css";

const menuItems = [
  { title: "Hero", id: "hero", icon: "🏠" },
  { title: "About", id: "about", icon: "👤" },
  { title: "Projects", id: "projects", icon: "💻" },
  { title: "Experience", id: "experience", icon: "💼" },
  { title: "Skills", id: "skills", icon: "🧠" },
  { title: "Contact", id: "contact", icon: "📩" },
];

export default function MenuDrawer({ open, setOpen }) {

  const goToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);

  };

  return (

    <AnimatePresence>

      {open && (

        <>

          <motion.div
            className="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="menu-drawer"
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
          >

            <h2>Navigation</h2>

            <div className="drawer-links">

              {menuItems.map((item) => (

                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                >

                  <span>{item.icon}</span>

                  {item.title}

                </button>

              ))}

            </div>

<div className="drawer-footer">

<a
  href="/resume.pdf"
  className="drawer-resume"
  download="Faizur_Rahaman_Resume.pdf"
>
  📄 Download Resume
</a>

  <div className="drawer-socials">

    <a
      href="https://github.com/faizur55"
      target="_blank"
      rel="noopener noreferrer"
    >
      🐙 GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/faizurrahaman27/"
      target="_blank"
      rel="noopener noreferrer"
    >
      💼 LinkedIn
    </a>

    <a
      href="https://www.leetcode.com/in/faizurrahaman27/"
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 LeetCode
    </a>

    <a
      href="mailto:faizurrahamanshaik@gmail.com"
    >
      ✉️ Email
    </a>

  </div>

  <p>

    Built with ❤️ using React + Framer Motion

  </p>

</div>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );

}