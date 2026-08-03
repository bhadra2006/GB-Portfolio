import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect!</h3>

          <p>
            Feel free to contact me for internships, projects, or collaboration.
          </p>

          <div className="info">
            <FaEnvelope />
            <span>gayathribhadra14@example.com</span>
          </div>

          <div className="info">
            <FaPhone />
            <span>Let's just mail! ;)</span>
          </div>

          <div className="info">
            <FaMapMarkerAlt />
            <span>Kerala, India</span>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="6" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;