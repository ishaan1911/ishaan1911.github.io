import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Code, Sparkles, Briefcase, Calendar } from 'lucide-react';

export default function Portfolio() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Dec 2024",
      credentialId: "ba0f0aef-79de-4751-9dd7-034abc188a93",
      link: "https://www.credly.com/badges/ba0f0aef-79de-4751-9dd7-034abc188a93/print"
    },
    {
      name: "Network Defense Essentials (NDE)",
      issuer: "EC-Council",
      date: "Issued Apr 2023",
      credentialId: "215747",
      link: null
    },
    {
      name: "Python Basics and API Usage",
      issuer: "Carloman Systems",
      date: "Completed Jun 2022",
      credentialId: "CI23179",
      link: null
    }
  ];

  const experiences = [
    {
      company: "CreArt Solutions",
      role: "Software Engineering Intern",
      period: "Jun 2023 - Aug 2023",
      location: "Remote",
      achievements: [
        "Designed and deployed scalable full-stack applications using React, Node.js, and MongoDB",
        "Optimized database queries and caching strategies, reducing API response times by 45%",
        "Collaborated with development teams using Git and Agile to deliver multiple client projects",
        "Built responsive interfaces with modern design systems, improving user engagement"
      ]
    },
    {
      company: "Excellent WebWorld",
      role: "Cloud Development Intern",
      period: "May 2023 - Jul 2023",
      location: "Ahmedabad, India",
      achievements: [
        "Worked with AWS (EC2, S3, Lambda) to build scalable cloud solutions and infrastructure",
        "Collaborated on migrating legacy applications to cloud infrastructure, reducing operational costs",
        "Developed RESTful APIs handling 10,000+ daily requests with sub-200ms latency",
        "Implemented secure authentication systems using JWT and OAuth 2.0 for 5,000+ accounts"
      ]
    }
  ];

  const projects = [
    {
      title: "AXIOM",
      subtitle: "Agentic RAG Codebase Explanation System",
      description: "Built a self-explaining backend using agentic Retrieval-Augmented Generation (RAG) that indexes any public GitHub repository and streams answers with every claim cited to exact file and line numbers. Deployed on HuggingFace Spaces with persistent ChromaDB vector store. Engineered a 4-pass multi-query retrieval pipeline with HNSW vector search – expands queries into semantically distinct sub-queries, re-ranks 14 retrieved chunks by AST node type before LLM context injection. Validated against django/django (176 files, 1,400+ chunks) with AST-based Python chunking for functions, classes, and async route handlers.",
      tech: ["FastAPI", "RAG", "ChromaDB", "HNSW Search", "AST Parsing", "LangChain", "Groq API"],
      github: null,
      demo: "https://huggingface.co/spaces/ishaan1911/AXIOM"
    },
    {
      title: "CodeCraft",
      subtitle: "AI-Powered Skills Verification Platform",
      description: "Full-stack engineering skills verification platform with AI-powered automatic grading system using Groq LLM API. Features three challenge categories: Code Comprehension, Debugging, and AI Code Review with real-time feedback and detailed grading breakdowns. Built with microservices architecture featuring React frontend deployed on Vercel and FastAPI backend on Railway, with PostgreSQL database on Supabase for persistent storage. Implements secure JWT-based authentication, Redis caching for performance optimization, and RESTful API design patterns.",
      tech: ["React", "FastAPI", "PostgreSQL", "Groq AI", "Redis", "JWT", "Microservices"],
      github: "https://github.com/ishaan1911/codecraft",
      demo: "https://codecraft-frontend-psi.vercel.app/"
    },
    {
      title: "Ask Your Mail",
      subtitle: "RAG-Based Email Search System",
      description: "Built RAG-based email search application using LangChain and Hugging Face transformers for semantic embeddings pipeline, achieving 94% search accuracy validated through Precision, Recall, and F1-score metrics. Implements vector similarity search with cosine distance for contextually relevant email retrieval. Optimized query cost to $0.01 per search via efficient API usage patterns and intelligent caching strategies. Integrated Gmail API with OAuth 2.0 authentication for secure email access. Built interactive Gradio UI for real-time query visualization and result exploration.",
      tech: ["Python", "RAG", "LangChain", "Hugging Face", "Vector Embeddings", "Gmail API", "Gradio"],
      github: null,
      demo: "https://sites.google.com/view/askyourmail"
    },
    {
      title: "DINE EASY",
      subtitle: "Restaurant Management System",
      description: "Comprehensive relational database management system (RDBMS) designed to optimize restaurant operations. Features real-time order management with kitchen dashboard, intelligent inventory tracking with automated low-stock alerts, and reservation system preventing overbooking. Built with Django backend and PostgreSQL database with 20+ normalized tables in BCNF. Implements role-based access control for managers, waitstaff, and kitchen staff. Dockerized for consistent deployment across environments. Team project demonstrating collaborative software development practices.",
      tech: ["Django", "PostgreSQL", "React", "Docker", "RDBMS", "Normalized Schema"],
      github: null,
      demo: null
    },
    {
      title: "Recruit.me",
      subtitle: "Serverless Hiring Platform",
      description: "Built serverless recruitment platform with role-based access control using Next.js, AWS Lambda, API Gateway, and RDS (MySQL). Implemented secure JWT authentication with bcrypt password hashing and email verification workflows. Designed normalized relational schema with 8+ tables for efficient data modeling. Built 15+ RESTful API endpoints with input validation, CORS configuration, and pagination for scalability. Deployed optimized static frontend to AWS S3 with CloudFront CDN for global distribution and sub-50ms query latency.",
      tech: ["Next.js", "AWS Lambda", "API Gateway", "RDS (MySQL)", "JWT", "bcrypt", "S3"],
      github: "https://github.com/Labheshm21/Recruit.me",
      demo: null
    },
    {
      title: "FusionBot",
      subtitle: "Multi-Modal AI Chatbot",
      description: "Engineered conversational AI chatbot using NLP and intent classification to assist content creators with workflow automation and contextual recommendations. Integrates multiple AI APIs including OpenAI GPT-4 for natural language understanding, DALL-E 3 for image generation, Whisper for speech-to-text conversion across 50+ languages, and Eleven Labs for text-to-speech synthesis. Features document processing for PDFs and DOCX files, YouTube video summarization using caption extraction, and multi-modal data interaction. Built with React frontend and Node.js backend using LangChain for orchestration.",
      tech: ["React", "Node.js", "NLP", "GPT-4", "DALL-E", "Whisper", "LangChain"],
      github: null,
      demo: null
    }
  ];

  const coursework = [
    "AI",
    "Machine Learning",
    "Database Management Systems",
    "Algorithms: Design and Analysis",
    "Design of Software Systems"
  ];

  const skills = {
    "Languages": ["Python", "Java", "JavaScript", "TypeScript"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    "Backend": ["Node.js", "Express", "Flask", "FastAPI", "Django"],
    "Cloud & DevOps": ["AWS (Lambda, S3, DynamoDB, API Gateway)", "Docker", "Git", "CI/CD", "Vercel", "Railway"],
    "AI/ML": ["TensorFlow", "PyTorch", "NLP", "LangChain", "OpenAI API", "Vector Embeddings", "DALL-E", "Whisper", "Groq AI"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Supabase", "Redis"],
    "Tools & APIs": ["REST APIs", "Streamlit", "Gmail API", "Eleven Labs API"]
  };

  return (
    <div className={`portfolio ${theme}`}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .portfolio {
          --bg: #ffffff;
          --text: #000000;
          --border: #000000;
          --accent: #000000;
          
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          line-height: 1.4;
        }

        .portfolio.dark {
          --bg: #000000;
          --text: #ffffff;
          --border: #ffffff;
          --accent: #ffffff;
        }

        .theme-toggle {
          position: fixed;
          top: 40px;
          right: 40px;
          background: transparent;
          border: 2px solid var(--border);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100;
          transition: all 0.2s ease;
        }

        .theme-toggle:hover {
          background: var(--text);
        }

        .theme-toggle:hover svg {
          color: var(--bg);
        }

        .theme-toggle svg {
          width: 20px;
          height: 20px;
          color: var(--text);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 40px;
        }

        header {
          margin-bottom: 120px;
          border-bottom: 2px solid var(--border);
          padding-bottom: 40px;
        }

        h1 {
          font-size: 72px;
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .subtitle {
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 30px;
          letter-spacing: 0.02em;
        }

        .bio {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 800px;
          font-weight: 400;
          text-align: justify;
        }

        .social-links {
          display: flex;
          gap: 30px;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text);
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          border: 2px solid var(--border);
          padding: 12px 24px;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-link:hover {
          background: var(--text);
          color: var(--bg);
        }

        .social-link svg {
          width: 18px;
          height: 18px;
        }

        section {
          margin-bottom: 100px;
        }

        h2 {
          font-size: 48px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 50px;
          border-bottom: 3px solid var(--border);
          padding-bottom: 20px;
        }

        .experience-item {
          margin-bottom: 60px;
          border: 2px solid var(--border);
          padding: 40px;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .experience-title h3 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }

        .experience-company {
          font-size: 20px;
          font-weight: 600;
        }

        .experience-meta {
          text-align: right;
          font-size: 16px;
          font-weight: 500;
        }

        .achievements ul {
          list-style: none;
          padding: 0;
        }

        .achievements li {
          margin-bottom: 15px;
          font-size: 17px;
          line-height: 1.5;
          padding-left: 30px;
          position: relative;
          text-align: justify;
        }

        .achievements li::before {
          content: '—';
          position: absolute;
          left: 0;
          font-weight: 700;
        }

        .project {
          margin-bottom: 50px;
          border: 3px solid var(--border);
          padding: 40px;
          transition: all 0.2s ease;
        }

        .project:hover {
          background: var(--text);
          color: var(--bg);
        }

        .project:hover .project-link {
          border-color: var(--bg);
          color: var(--bg);
        }

        .project:hover .project-link:hover {
          background: var(--bg);
          color: var(--text);
        }

        .project:hover .tech-tag {
          border-color: var(--bg);
          color: var(--bg);
        }

        .project h3 {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .project-subtitle {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project p {
          font-size: 17px;
          line-height: 1.6;
          margin-bottom: 25px;
          text-align: justify;
        }

        .project-links {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 2px solid var(--border);
          padding: 10px 20px;
          text-decoration: none;
          color: var(--text);
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .project-link:hover {
          background: var(--text);
          color: var(--bg);
        }

        .project-link svg {
          width: 16px;
          height: 16px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tech-tag {
          border: 2px solid var(--border);
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .coursework-grid {
          display: grid;
          gap: 50px;
        }

        .course-list {
          display: grid;
          gap: 20px;
        }

        .course-item {
          border: 2px solid var(--border);
          padding: 25px;
        }

        .course-name {
          font-size: 20px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .skills-grid {
          display: grid;
          gap: 40px;
        }

        .skill-category h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-item {
          border: 2px solid var(--border);
          padding: 10px 18px;
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .certification-item {
          border: 2px solid var(--border);
          padding: 30px;
          margin-bottom: 30px;
        }

        .cert-name {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .cert-issuer {
          font-size: 17px;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .cert-meta {
          display: flex;
          gap: 20px;
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .cert-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 2px solid var(--border);
          padding: 10px 20px;
          text-decoration: none;
          color: var(--text);
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .cert-link:hover {
          background: var(--text);
          color: var(--bg);
        }

        .cert-link svg {
          width: 14px;
          height: 14px;
        }

        .education {
          border: 2px solid var(--border);
          padding: 30px;
          margin-bottom: 30px;
        }

        .education h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .education .degree {
          font-size: 18px;
          margin-bottom: 8px;
        }

        .education .year {
          font-size: 16px;
          font-weight: 500;
        }

        footer {
          text-align: center;
          padding-top: 60px;
          border-top: 2px solid var(--border);
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .container {
            padding: 60px 20px;
          }

          h1 {
            font-size: 48px;
          }

          h2 {
            font-size: 36px;
          }

          .theme-toggle {
            top: 20px;
            right: 20px;
          }

          .experience-header {
            flex-direction: column;
          }

          .experience-meta {
            text-align: left;
          }

          .social-links {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>

      <div className="container">
        <header>
          <h1>Ishaan<br/>Parekh</h1>
          <p className="subtitle">Software Engineer / AI Systems</p>
          <p className="bio">
            Graduate student at Worcester Polytechnic Institute pursuing M.S. in Computer Science. 
            Building scalable cloud applications and AI-powered systems. Focused on full-stack development, 
            serverless architectures, and machine learning applications.
          </p>
          <div className="social-links">
            <a href="mailto:iparekh@wpi.edu" className="social-link">
              <Mail />
              <span>Email</span>
            </a>
            <a href="https://github.com/ishaan1911" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ishaan-parekh-19i112002" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        <section id="experience">
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{exp.role}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <div className="experience-meta">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <div className="achievements">
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section id="projects">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <div className="project-subtitle">{project.subtitle}</div>
              <p>{project.description}</p>
              {(project.github || project.demo) && (
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              )}
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="coursework">
          <h2>Coursework</h2>
          <div className="course-list">
            {coursework.map((course, index) => (
              <div className="course-item" key={index}>
                <div className="course-name">{course}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <div className="skill-category" key={index}>
                <h3>{category}</h3>
                <div className="skill-list">
                  {items.map((skill, i) => (
                    <span className="skill-item" key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>
          {certifications.map((cert, index) => (
            <div className="certification-item" key={index}>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-meta">
                <span>{cert.date}</span>
                <span>ID: {cert.credentialId}</span>
              </div>
              {cert.link && (
                <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  <span>Verify</span>
                </a>
              )}
            </div>
          ))}
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="education">
            <h3>Worcester Polytechnic Institute</h3>
            <p className="degree">Master of Science in Computer Science</p>
            <p className="year">Expected May 2026</p>
          </div>
          <div className="education">
            <h3>Indus University</h3>
            <p className="degree">Bachelor of Science in Computer Science</p>
            <p className="year">Graduated 2024</p>
          </div>
        </section>

        <footer>
          <p>© 2026 Ishaan Parekh</p>
        </footer>
      </div>
    </div>
  );
}
