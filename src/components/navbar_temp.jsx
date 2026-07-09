import "./../styles/Navbar.css";
import { useEffect, useState } from "react";
import MenuDrawer from "./MenuDrawer";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export function Navbar() {

  const [active, setActive] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActive(entry.target.id);

          }

        });

      },

      {

        threshold: .45,

      }

    );

    links.forEach((link) => {

      const section = document.getElementById(link.id);

      if (section) observer.observe(section);

    });

    return () => observer.disconnect();

  }, []);

  const scrollTo = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };

  return (

    <>

      <nav className="navbar">

        <div className="logo">

          Faizur.

        </div>

        <ul className="nav-links">

          {links.map((link) => (

            <li
              key={link.id}
              className={active === link.id ? "active-link" : ""}
              onClick={() => scrollTo(link.id)}
            >

              {link.name}

            </li>

          ))}

        </ul>

        <div className="nav-right">

          <button className="resume-btn">

            Resume

          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? "✕" : "☰"}

          </button>

        </div>

      </nav>

      <MenuDrawer
        open={menuOpen}
        setOpen={setMenuOpen}
      />

    </>

  );

}

export default Navbar;