function Skills() {
  const technicalSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Java",
    "Python",
    "C",
    "MongoDB",
    "Git & GitHub",
    "Streamlit",
    "Playwright",
    "LangChain",
    "Hugging Face",
    "VS Code",
  ];

  const designSkills = [
    "Digital Illustration",
    "UI/UX Design",
    "Canva",
    "Figma",
    "ibisPaint X",
    "PicsArt",
    "Visual Design",
    "Logo Design",
    "Poster Design",
    "Social Media Design",
    "Creative Branding",
  ];

  const softSkills = [
    "Creative Thinking",
    "Critical Thinking",
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Quick Learner",
    "Continuous Learner",
    "Adaptability",
    "Time Management",
    "Leadership",
    "Attention to Detail",
    "Analytical Thinking",
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
        <div className="title-line"></div>
      </div>

      <div className="skills-wrapper">

        <div className="skills-box">
          <h3>Technical Skills</h3>

          <div className="tag-container">
            {technicalSkills.map((skill, index) => (
              <span className="skill-tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-box">
          <h3>Design Skills</h3>

          <div className="tag-container">
            {designSkills.map((skill, index) => (
              <span className="skill-tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-box">
          <h3>Soft Skills</h3>

          <div className="tag-container">
            {softSkills.map((skill, index) => (
              <span className="skill-tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;