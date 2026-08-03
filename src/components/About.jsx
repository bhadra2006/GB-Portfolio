function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>
            Blending <span>Creativity</span> with{" "}
            <span>Technology</span>
          </h3>

          <p>
            Creativity has always been at the heart of everything I do.
            As a freelance illustrator and an Engineering student,
            I bridge technical thinking with artistic expression.
          </p>

          <p>
            I enjoy creating work that is thoughtful, visually engaging,
            and purposeful, constantly pushing myself to learn,
            experiment, and grow with every project.
          </p>

          <p>
            Alongside my passion for illustration and visual design,
            I am continuously exploring modern web technologies,
            frontend development, and AI-powered applications to
            create meaningful digital experiences.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h4>Education</h4>
              <p>CSE - AI Learner At SJCET Palai</p>
            </div>

            <div className="info-card">
              <h4>Profession</h4>
              <p>Freelance Illustrator & Student</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>Kerala, India</p>
            </div>

            <div className="info-card">
              <h4>Interests</h4>
              <p>Web Development, AI & Creative Design, Illustration & so on</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;