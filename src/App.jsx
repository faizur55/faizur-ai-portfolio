import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Navbar } from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />



        <main
          style={{
            minHeight: "300vh",
            paddingTop: "100px",
            color: "white",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >

          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;