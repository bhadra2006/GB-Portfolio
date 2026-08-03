function Projects() {
  const projects = [
    {
      title: "Instagram Sentiment Analysis",
      description:
        "An AI-powered web application that analyzes Instagram comments and classifies them into positive and negative sentiments using modern NLP techniques.",
      tech: "Python • Streamlit • Playwright • LangChain • Hugging Face",
      github: "https://github.com/bhadra2006/instabrand-sentiment-analyzer.git",
    },
    {
      title: "Onam Snake Game",
      description:
        "A fun browser-based snake game inspired by the spirit of Onam, featuring a festive theme and interactive gameplay.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/bhadra2006/onapapad-snake.git",
    },
    {
      title: "Dashboard UI Design",
      description:
        "A modern dashboard interface designed with a focus on user experience, clean layouts, and intuitive navigation.",
      tech: "Figma • UI/UX Design",
      github: "https://github.com/bhadra2006/prana-saas-dashboard.git",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Featured Projects</h2>
        <div className="title-line"></div>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech">{project.tech}</span>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button>View Repository</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <p>
          Interested in exploring more of my work?
        </p>

        <a
          href="https://github.com/bhadra2006"
          target="_blank"
          rel="noreferrer"
        >
          Visit My GitHub →
        </a>
      </div>
    </section>
  );
}

export default Projects;