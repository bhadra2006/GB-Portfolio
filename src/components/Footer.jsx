import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const [visible, setVisible] = useState(false);
  const endingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (endingRef.current) {
      observer.observe(endingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* Cute Ending Animation */}
      <div
        ref={endingRef}
        className={`cute-ending ${visible ? "ending-visible" : ""}`}
      >
        {/* Flower */}
        <div className="ending-flower">
          <span className="petal petal-one"></span>
          <span className="petal petal-two"></span>
          <span className="petal petal-three"></span>
          <span className="petal petal-four"></span>

          <span className="flower-center">♥</span>
        </div>

        {/* Sparkles */}
        <div className="ending-spark spark-a">✦</div>
        <div className="ending-spark spark-b">✧</div>
        <div className="ending-spark spark-c">✦</div>

        <h3>You made it to the end ♡</h3>

        <p>
          Thanks for stopping by!
        </p>

        {/* Back to top */}
        <button
          className="back-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>

        <span className="back-top-text">
          back to top
        </span>
      </div>

      {/* Your Existing Footer */}
      <h2>Gayathri Bhadra R</h2>

      <p>
        Thank you for visiting my portfolio.
        Let's connect and build something amazing together!
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/bhadra2006"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/gayathri-bhadra-r"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:gayathribhadra14@gmail.com"
          aria-label="Email"
        >
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