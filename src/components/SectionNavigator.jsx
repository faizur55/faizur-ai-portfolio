import { useEffect, useState } from "react";
import "../styles/SectionNavigator.css";

const sections = [
  "hero",
  "about",
  "projects",
  "experience",
  "skills",
  "contact",
];

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-nav">

      {sections.map((section) => (

        <button
          key={section}
          className={
            activeSection === section
              ? "nav-dot active"
              : "nav-dot"
          }
          onClick={() => {
            document
              .getElementById(section)
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          <span className="tooltip">
            {section.charAt(0).toUpperCase() +
              section.slice(1)}
          </span>
        </button>

      ))}

    </div>
  );
}