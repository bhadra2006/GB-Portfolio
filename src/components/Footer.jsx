import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Gayathri Bhadra R</h2>

      <p>
        Thank you for visiting my portfolio.
        Let's connect and build something amazing together!
      </p>

      <div className="footer-icons">
        <a href="https://github.com/bhadra2006" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/gayathri-bhadra-r" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:gayathribhadra14@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="copyright">
        © 2026 Gayathri Bhadra R. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;