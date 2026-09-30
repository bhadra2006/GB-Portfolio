import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="premium-intro">

          {/* Background glow */}
          <div className="intro-red-glow"></div>
          <div className="intro-red-glow glow-two"></div>

          {/* Floating particles */}
          <div className="particles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Orbit */}
          <div className="intro-ring ring-one"></div>
          <div className="intro-ring ring-two"></div>

          {/* Main logo */}
          <div className="gb-logo">
            <span>G</span>
            <span>B</span>
          </div>

          {/* Sparkles */}
          <div className="intro-star star-one">✦</div>
          <div className="intro-star star-two">✧</div>
          <div className="intro-star star-three">✦</div>
          <div className="intro-star star-four">✧</div>

          {/* Name */}
          <div className="intro-content">

            <h1>
              Gayathri <span>Bhadra R</span>
            </h1>

            <div className="intro-line"></div>

            <p>
              CSE (AI) Student
              <b> • </b>
              Developer
              <b> • </b>
              UI/UX Designer
            </p>

          </div>

          {/* Small bottom message */}
          <div className="intro-bottom">
            <span>Welcome to my portfolio</span>
          </div>

        </div>
      )}

      <div className={showIntro ? "portfolio-hidden" : "portfolio-visible"}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;