import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          Gayathri <span>Bhadra R</span>
        </h1>

        <h2>Freelance Illustrator • Creative Designer • Web Enthusiast</h2>

        <p className="hero-description">
          I am a Computer Science AI student with a passion for creativity and
          technology. As a freelance illustrator, I enjoy creating unique
          digital artwork while also building responsive and modern web
          applications. I love turning ideas into visually engaging and
          meaningful experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">View My Work</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">Get in Touch</button>
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/bhadra2006"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gayathri-bhadra-r"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:gayathribhadra14@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-card">
          <img
            src="/profile.jpg"
            alt="Gayathri Bhadra R"
          />

          <div className="glow"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;