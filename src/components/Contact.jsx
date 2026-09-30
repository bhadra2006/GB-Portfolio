import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  const [sent, setSent] = useState(false);


  const handleSubmit = (e) => {

    e.preventDefault();

    setSent(true);


    setTimeout(() => {

      setSent(false);

    }, 2500);

  };


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



        <div className="contact-form">


          {sent ? (

            <div className="success-message">
              Message Sent! 
            </div>


          ) : (


            <form className="contact-form" onSubmit={handleSubmit}>


              <input
                type="text"
                placeholder="Your Name"
                required
              />


              <input
                type="email"
                placeholder="Your Email"
                required
              />


              <textarea
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>


              <button type="submit">
                Send Message
              </button>


            </form>


          )}


        </div>


      </div>


    </section>
  );
}


export default Contact;