import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Code, Sparkles, Briefcase, GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeSkill, setActiveSkill] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 3000);
    return () => clearTimeout(timer);
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
      link: "https://www.credly.com/badges/ba0f0aef-79de-4751-9dd7-034abc188a93/print",
      icon: "☁️"
    },
    {
      name: "Network Defense Essentials (NDE)",
      issuer: "EC-Council",
      date: "Issued Apr 2023",
      credentialId: "215747",
      link: null,
      icon: "🔒"
    },
    {
      name: "Python Basics and API Usage",
      issuer: "Carloman Systems",
      date: "Completed Jun 2022",
      credentialId: "CI23179",
      link: null,
      icon: "🐍"
    }
  ];

  const experiences = [
    {
      company: "CreArt Solutions",
      role: "Software Engineering Intern",
      period: "Jun 2023 - Aug 2023",
      location: "Remote",
      achievements: [
        "Architected and deployed full-stack web applications using React, Node.js, and MongoDB, serving 1,000+ users with 99.5% uptime",
        "Optimized database queries and implemented caching strategies, reducing API response time by 45% and improving user experience",
        "Collaborated with cross-functional teams of 5+ developers using Git and Agile methodologies to deliver 3 client projects on schedule",
        "Implemented responsive UI/UX designs with Material-UI, increasing mobile user engagement by 30%",
        "Conducted comprehensive code reviews and wrote technical documentation, improving team code quality standards"
      ]
    },
    {
      company: "Excellent WebWorld",
      role: "Software Development Intern",
      period: "Jan 2023 - May 2023",
      location: "Ahmedabad, India",
      achievements: [
        "Developed and integrated RESTful APIs for 4+ client applications, handling 10,000+ daily requests with sub-200ms latency",
        "Built secure authentication and authorization systems using JWT and OAuth 2.0, protecting user data for 5,000+ accounts",
        "Debugged and resolved 50+ production issues, improving application stability by 40% and reducing customer support tickets",
        "Implemented automated testing suites using Jest and Mocha, achieving 75% code coverage and reducing bugs by 35%",
        "Worked with AWS services (EC2, S3) to deploy and monitor cloud-based applications in production environments"
      ]
    }
  ];

  const projects = [
    {
      title: "CodeCraft: AI-Powered Skills Verification Platform",
      description: "A sophisticated full-stack engineering skills verification platform that leverages AI to automatically grade coding challenges. Built with a modern microservices architecture featuring React frontend on Vercel and FastAPI backend on Railway. CodeCraft provides three distinct challenge types - Code Comprehension, Debugging, and AI Code Review - each with intelligent grading powered by Groq's LLM API. Features real-time feedback, submission tracking, and a comprehensive challenge browsing system.",
      detailedFeatures: [
        "AI-powered automatic grading system using Groq LLM API for comprehension and code review challenges",
        "Three challenge categories: Code Comprehension (explain patterns), Debugging (find and fix bugs), and AI Code Review (security audits)",
        "Real-time submission system with instant feedback and detailed grading breakdowns (accuracy, completeness, clarity)",
        "Challenge navigation and browsing system with filtering by difficulty and category",
        "User authentication and session management with secure JWT-based authorization",
        "Microservices architecture with separate frontend (Vercel) and backend (Railway) deployments for scalability"
      ],
      tech: ["React", "FastAPI", "PostgreSQL", "Supabase", "Groq AI", "Redis", "Upstash", "Vercel", "Railway", "Docker"],
      github: "https://github.com/ishaan1911/codecraft",
      demo: "https://codecraft-frontend-psi.vercel.app/",
      icon: "⚡",
      metrics: "AI-powered grading • 3 challenge types • Full-stack microservices"
    },
    {
      title: "Ask Your Mail",
      description: "An innovative AI-powered email search application that revolutionizes inbox interaction through natural language processing. Leverages OpenAI's GPT-4 and advanced NLP techniques including semantic search with vector embeddings to understand user intent and retrieve contextually relevant emails. Built with Python and Flask backend, featuring intelligent query understanding that goes beyond simple keyword matching.",
      detailedFeatures: [
        "Natural language query processing using OpenAI GPT-4 for understanding user intent and context",
        "Semantic search implementation using vector embeddings (text-embedding-ada-002) with cosine similarity matching",
        "Gmail API integration for secure email access with OAuth 2.0 authentication flow",
        "Context-aware responses with relevant email excerpts, sender info, and thread relationships",
        "Privacy-focused architecture with local email processing and encrypted credential storage"
      ],
      tech: ["Python", "OpenAI GPT-4", "Vector Embeddings", "Flask", "Gmail API", "OAuth 2.0", "NumPy"],
      github: null,
      demo: "https://sites.google.com/view/askyourmail",
      icon: "📧",
      metrics: "AI-powered search • 95% query accuracy • Privacy-first design"
    },
    {
      title: "DineEasy: Restaurant Management System",
      description: "A comprehensive relational database management system (RDBMS) designed to optimize restaurant operations by addressing inefficiencies in order processing, inventory tracking, and staff scheduling. Built as a team project at WPI, DineEasy integrates order management, real-time reservations, inventory tracking with automated alerts, and employee scheduling into a centralized PostgreSQL database with a Django backend and React frontend.",
      detailedFeatures: [
        "Real-time order management system with kitchen dashboard for tracking order preparation status",
        "Intelligent inventory tracking with automated low-stock alerts (sub-10 units) to reduce food waste",
        "Table reservation system preventing overbooking and optimizing restaurant capacity management",
        "Employee shift scheduling and role-based access control for managers, waitstaff, and kitchen staff",
        "Admin dashboard with business analytics including popular menu items and employee performance metrics",
        "Delivery management system with driver assignment and order status tracking"
      ],
      tech: ["Django", "PostgreSQL", "React", "Docker", "psycopg3", "RESTful API", "Python"],
      github: null,
      demo: null,
      icon: "🍽️",
      team: "Team project with Jackson Balcazar, Caleb Duah, and Vedant More | WPI CS 542 Database Management Systems",
      metrics: "20+ normalized tables • PostgreSQL RDBMS • Docker containerized"
    },
    {
      title: "Recruit.me",
      description: "A production-grade serverless hiring platform leveraging AWS cloud infrastructure to streamline the recruitment process. Architected with AWS Lambda for compute, API Gateway for RESTful endpoints, and DynamoDB for scalable NoSQL data storage. Features intelligent candidate-job matching algorithms, automated interview scheduling with calendar integration, and a responsive React frontend optimized for both recruiters and candidates.",
      detailedFeatures: [
        "Serverless architecture using AWS Lambda (Node.js runtime) with API Gateway, eliminating server management overhead",
        "Real-time candidate matching engine using weighted scoring algorithm based on skills, experience, and location",
        "Automated email notification system using AWS SES for application updates and interview reminders",
        "Admin dashboard with analytics for tracking application metrics, time-to-hire, and candidate pipeline",
        "Optimized DynamoDB queries with GSI (Global Secondary Indexes) for sub-50ms response times"
      ],
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "React", "Node.js", "AWS SES", "Bootstrap"],
      github: "https://github.com/Labheshm21/Recruit.me",
      demo: null,
      icon: "💼",
      metrics: "Serverless architecture • Sub-50ms query latency • 99.9% uptime"
    },
    {
      title: "FusionBot",
      description: "A comprehensive multi-modal AI platform that revolutionizes data interaction across text, image, audio, and video formats. FusionBot seamlessly integrates document processing, YouTube video summarization with caption analysis, AI image generation, and bidirectional speech conversion. Built with React frontend and Node.js backend, utilizing multiple state-of-the-art AI APIs including OpenAI GPT-4, DALL-E 3, Whisper, and Eleven Labs for professional-grade voice synthesis.",
      detailedFeatures: [
        "Multi-modal AI chat supporting text documents (PDF, DOCX), images, and videos with context-aware responses",
        "YouTube video summarization using caption extraction, NLP analysis, and GPT-4 for concise summaries",
        "AI image generation using DALL-E 3 with prompt engineering for high-quality, contextual visual outputs",
        "Speech-to-text conversion using OpenAI Whisper API supporting 50+ languages with 95%+ accuracy",
        "Text-to-speech synthesis using Eleven Labs API with natural-sounding voice generation and emotion control",
        "Document Q&A system with chunking and vector search for accurate information retrieval from large documents"
      ],
      tech: ["React", "Node.js", "OpenAI GPT-4", "DALL-E 3", "Whisper API", "Eleven Labs", "Streamlit", "Tailwind CSS", "Vite", "LangChain"],
      github: null,
      poster: "/fusionbot-poster.pdf",
      demo: null,
      icon: "🤖",
      team: "Collaborative project with Dev Patel and Dhruv Patel | Mentored by Ms. Babita Patel",
      metrics: "6 AI integrations • Multi-modal processing • 50+ language support"
    }
  ];

  const coursework = {
    "Spring 2026 (Current)": [
      {
        code: "CS 534",
        name: "Introduction to Artificial Intelligence",
        focus: "Intelligent agents, search algorithms, machine learning fundamentals, and natural language processing"
      },
      {
        code: "CS 528",
        name: "Mobile and Ubiquitous Computing",
        focus: "Android development with Kotlin, Jetpack Compose, mobile UI/UX design, and sensor-based applications"
      }
    ],
    "Fall 2025": [
      {
        code: "CS 509",
        name: "Design of Software Systems",
        focus: "Software architecture patterns, system design principles, and building scalable enterprise applications"
      },
      {
        code: "CS 548",
        name: "Knowledge Discovery and Data Mining",
        focus: "Data mining techniques, pattern recognition, and extracting actionable insights from complex datasets"
      }
    ],
    "Spring 2025": [
      {
        code: "CS 5003",
        name: "Foundations of Computer Science: An Introduction",
        focus: "Core theoretical foundations and mathematical principles underlying computer science and programming"
      },
      {
        code: "CS 539",
        name: "Machine Learning",
        focus: "Supervised and unsupervised learning, neural networks, and practical applications of ML algorithms"
      },
      {
        code: "CS 542",
        name: "Database Management Systems",
        focus: "Relational databases, SQL optimization, NoSQL systems, and modern data storage architectures"
      }
    ],
    "Fall 2024": [
      {
        code: "CS 5084",
        name: "Introduction to Algorithms: Design and Analysis",
        focus: "Advanced algorithmic paradigms, complexity analysis, and optimization techniques for solving computational problems"
      },
      {
        code: "CS 513",
        name: "Computer Networks",
        focus: "Network protocols, distributed systems, and understanding the architecture of modern internet infrastructure"
      },
      {
        code: "CS 547",
        name: "Information Retrieval",
        focus: "Search algorithms, ranking systems, and techniques for efficiently retrieving relevant information from large datasets"
      }
    ]
  };

  const skills = {
    "Languages": ["Python", "Java", "JavaScript", "TypeScript", "Kotlin", "C++"],
    "Frontend": ["React", "Next.js", "Jetpack Compose", "Tailwind CSS", "HTML/CSS", "Vite"],
    "Backend": ["Node.js", "Express", "Flask", "FastAPI", "Django", "Spring Boot"],
    "Cloud & DevOps": ["AWS (Lambda, S3, DynamoDB, API Gateway)", "Docker", "Git", "CI/CD", "GCP", "Vercel", "Railway"],
    "AI/ML": ["TensorFlow", "PyTorch", "NLP", "LangChain", "OpenAI API", "Vector Embeddings", "DALL-E", "Whisper", "Groq AI"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "psycopg3", "Supabase", "Redis"],
    "Tools & APIs": ["REST APIs", "Streamlit", "Gmail API", "Eleven Labs API", "Bootstrap", "Upstash"]
  };

  return (
    <div className={`portfolio ${theme}`} ref={containerRef}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .portfolio {
          --bg: #fafaf9;
          --text: #1c1917;
          --text-secondary: #57534e;
          --border: #e7e5e4;
          --accent: #0c4a6e;
          --accent-hover: #075985;
          --code-bg: #f5f5f4;
          --glow: rgba(12, 74, 110, 0.3);
          
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: var(--bg);
          color: var(--text);
          transition: background 0.3s ease, color 0.3s ease;
          min-height: 100vh;
          line-height: 1.7;
          position: relative;
          overflow-x: hidden;
        }

        .portfolio.dark {
          --bg: #0a0a0a;
          --text: #e7e5e4;
          --text-secondary: #a8a29e;
          --border: #292524;
          --accent: #60a5fa;
          --accent-hover: #93c5fd;
          --code-bg: #1c1917;
          --glow: rgba(96, 165, 250, 0.4);
        }

        .portfolio::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at ${props => props.mouseX || 50}% ${props => props.mouseY || 50}%,
            var(--glow) 0%,
            transparent 50%
          );
          opacity: 0.3;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .container {
          max-width: 680px;
          margin: 0 auto;
          padding: 80px 24px;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          transition: transform 0.15s ease;
          mix-blend-mode: screen;
        }

        .theme-toggle {
          position: fixed;
          top: 32px;
          right: 32px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .theme-toggle:hover {
          transform: scale(1.1) rotate(15deg);
          border-color: var(--accent);
          box-shadow: 0 4px 16px var(--glow);
        }

        .theme-toggle:active {
          transform: scale(0.95) rotate(15deg);
        }

        .theme-toggle svg {
          width: 18px;
          height: 18px;
          color: var(--text);
          transition: transform 0.3s ease;
        }

        header {
          margin-bottom: 80px;
          position: relative;
          text-align: center;
        }

        h1 {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          color: var(--text);
          animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          display: inline-block;
          text-align: center;
        }

        h1::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: var(--accent);
          animation: underlineExpand 1s ease 0.5s forwards;
        }

        @keyframes underlineExpand {
          to {
            width: 100%;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .subtitle {
          font-size: 20px;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 24px;
          animation: fadeIn 0.8s ease 0.3s both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .bio {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 32px;
          animation: fadeIn 0.8s ease 0.5s both;
          text-align: center;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background: var(--accent);
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .social-links {
          display: flex;
          gap: 20px;
          animation: fadeInUp 0.8s ease 0.7s both;
          justify-content: center;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--accent);
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          position: relative;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent);
          opacity: 0;
          border-radius: 8px;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .social-link:hover {
          color: var(--bg);
          transform: translateY(-2px);
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .social-link svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .social-link:hover svg {
          transform: scale(1.1);
        }

        section {
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        h2 {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          margin-bottom: 32px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
          position: relative;
          text-align: center;
        }

        h2::before {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: var(--accent);
        }

        .about-section {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 80px;
        }

        .about-section p {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 16px;
          font-weight: 400;
        }

        .experience-item {
          margin-bottom: 40px;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--glow) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .experience-item:hover {
          transform: translateX(8px);
          border-color: var(--accent);
          box-shadow: 0 8px 32px var(--glow);
        }

        .experience-item:hover::before {
          opacity: 0.4;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
          gap: 8px;
        }

        .experience-title h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
        }

        .experience-company {
          font-size: 17px;
          color: var(--accent);
          font-weight: 600;
        }

        .experience-meta {
          text-align: right;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .experience-meta .period {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
        }

        .achievements {
          position: relative;
          z-index: 1;
        }

        .achievements ul {
          list-style: none;
          padding: 0;
        }

        .achievements li {
          padding-left: 24px;
          margin-bottom: 12px;
          position: relative;
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .achievements li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 18px;
        }

        .project {
          margin-bottom: 48px;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--bg);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .project::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--glow) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project:hover {
          transform: translateY(-4px) scale(1.01);
          border-color: var(--accent);
          box-shadow: 0 12px 40px var(--glow);
        }

        .project:hover::before {
          opacity: 0.6;
        }

        .project-icon {
          font-size: 32px;
          margin-bottom: 12px;
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project:hover .project-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .project-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .project h3 {
          font-size: 22px;
          font-weight: 600;
          color: var(--text);
          transition: color 0.3s ease;
        }

        .project:hover h3 {
          color: var(--accent);
        }

        .project-links {
          display: flex;
          gap: 12px;
        }

        .project-link {
          color: var(--accent);
          transition: all 0.3s ease;
          display: inline-flex;
          opacity: 0.6;
          text-decoration: none;
        }

        .project:hover .project-link {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        .project-link svg {
          width: 18px;
          height: 18px;
        }

        .project p {
          font-size: 17px;
          color: var(--text-secondary);
          margin-bottom: 16px;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .project-features {
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .project-features ul {
          list-style: none;
          padding: 0;
        }

        .project-features li {
          padding-left: 20px;
          margin-bottom: 8px;
          position: relative;
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .project-features li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }

        .project-team {
          font-size: 14px;
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          position: relative;
          z-index: 1;
        }

        .tech-tag {
          background: var(--code-bg);
          color: var(--text-secondary);
          padding: 6px 14px;
          border-radius: 6px;
          border: 1px solid var(--border);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .tech-tag:hover {
          background: var(--accent);
          color: var(--bg);
          border-color: var(--accent);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px var(--glow);
        }

        .coursework-grid {
          display: grid;
          gap: 24px;
        }

        .course-item {
          padding: 20px;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .course-item:hover {
          border-color: var(--accent);
          background: var(--code-bg);
          transform: translateX(8px);
        }

        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .course-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 4px;
        }

        .course-name {
          font-size: 17px;
          font-weight: 600;
          color: var(--text);
        }

        .skills-grid {
          display: grid;
          gap: 32px;
        }

        .skill-category {
          transition: transform 0.3s ease;
        }

        .skill-category:hover {
          transform: translateX(8px);
        }

        .skill-category h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
        }

        .skill-item {
          color: var(--text-secondary);
          padding: 6px 12px;
          border-radius: 6px;
          border: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }

        .skill-item:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: var(--code-bg);
          transform: translateY(-2px);
        }

        .skill-item.active {
          background: var(--accent);
          color: var(--bg);
          border-color: var(--accent);
          box-shadow: 0 4px 12px var(--glow);
        }

        .education {
          margin-bottom: 32px;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .education:hover {
          border-color: var(--accent);
          background: var(--code-bg);
          transform: translateX(8px);
        }

        .education h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .education:hover h3 {
          color: var(--accent);
        }

        .education .degree {
          font-size: 17px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .education .year {
          font-size: 15px;
          color: var(--text-secondary);
          font-style: italic;
        }

        .certification-item {
          padding: 20px;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .certification-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--glow) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .certification-item:hover {
          border-color: var(--accent);
          background: var(--code-bg);
          transform: translateX(8px);
          box-shadow: 0 4px 20px var(--glow);
        }

        .certification-item:hover::before {
          opacity: 0.3;
        }

        .cert-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }

        .cert-icon {
          font-size: 24px;
          transition: transform 0.3s ease;
        }

        .certification-item:hover .cert-icon {
          transform: scale(1.15) rotate(5deg);
        }

        .cert-content {
          flex: 1;
        }

        .cert-name {
          font-size: 18px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .certification-item:hover .cert-name {
          color: var(--accent);
        }

        .cert-issuer {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .cert-meta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: 8px;
          position: relative;
          z-index: 1;
        }

        .cert-date {
          font-style: italic;
        }

        .cert-id {
          font-family: 'JetBrains Mono', monospace;
          background: var(--code-bg);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
        }

        .cert-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          margin-top: 8px;
          position: relative;
          z-index: 1;
        }

        .cert-link:hover {
          color: var(--accent-hover);
          transform: translateX(4px);
        }

        .cert-link svg {
          width: 14px;
          height: 14px;
        }

        footer {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 15px;
          animation: fadeIn 1s ease 1s both;
        }

        @media (max-width: 768px) {
          .container {
            padding: 60px 20px;
          }

          h1 {
            font-size: 40px;
          }

          .subtitle {
            font-size: 18px;
          }

          .bio {
            font-size: 16px;
          }

          .theme-toggle {
            top: 20px;
            right: 20px;
          }

          .project {
            padding: 20px;
          }

          .social-links {
            flex-wrap: wrap;
          }

          .experience-header {
            flex-direction: column;
          }

          .experience-meta {
            text-align: left;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .sparkle {
          position: absolute;
          color: var(--accent);
          pointer-events: none;
          animation: sparkle 1s ease-out;
        }
      `}</style>

      <div 
        className="cursor-glow"
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`
        }}
      />

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>

      <div className="container">
        <header>
          <h1>Ishaan Parekh</h1>
          <p className="subtitle">Software Engineer & AI Enthusiast</p>
          <p className="bio">
            Graduate student at Worcester Polytechnic Institute pursuing M.S. in Computer Science. 
            Passionate about building scalable cloud applications and leveraging AI to solve real-world problems. 
            Experienced in full-stack development, serverless architectures, and machine learning applications.
            {isTyping && <span className="typing-cursor"></span>}
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

        <section id="about" className={`about-section ${visibleSections.has('about') ? 'visible' : ''}`}>
          <h2>About Me</h2>
          <p>
            I'm a software engineer with a passion for creating intelligent systems that solve real-world problems. 
            My journey in technology began at Indus University, where I discovered my love for AI and cloud computing.
          </p>
          <p>
            Currently pursuing my Master's at WPI, I focus on the intersection of artificial intelligence and scalable 
            software architecture. I'm particularly excited about serverless technologies, natural language processing, 
            and building applications that make complex technology accessible to everyone.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new AI models, contributing to open-source projects, 
            or diving deep into research papers on machine learning and distributed systems.
          </p>
        </section>

        <section id="experience" className={visibleSections.has('experience') ? 'visible' : ''}>
          <h2>Professional Experience</h2>
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{exp.role}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <div className="experience-meta">
                  <div className="period">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
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

        <section id="projects" className={visibleSections.has('projects') ? 'visible' : ''}>
          <h2>Featured Projects</h2>
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                      <Github />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                      <ExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              {project.team && <p className="project-team">{project.team}</p>}
              {project.metrics && (
                <div style={{
                  fontSize: '14px',
                  color: 'var(--accent)',
                  fontWeight: '500',
                  marginBottom: '16px',
                  fontFamily: "'JetBrains Mono', monospace",
                  position: 'relative',
                  zIndex: 1
                }}>
                  {project.metrics}
                </div>
              )}
              <div className="project-features">
                <ul>
                  {project.detailedFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="coursework" className={visibleSections.has('coursework') ? 'visible' : ''}>
          <h2>Graduate Coursework</h2>
          <div className="coursework-grid">
            {Object.entries(coursework).map(([semester, courses], semesterIndex) => (
              <div key={semesterIndex} style={{marginBottom: '40px'}}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  marginBottom: '20px',
                  textAlign: 'left'
                }}>
                  {semester}
                </h3>
                <div style={{display: 'grid', gap: '16px'}}>
                  {courses.map((course, index) => (
                    <div className="course-item" key={index}>
                      <div className="course-header">
                        <div>
                          <div className="course-code">{course.code}</div>
                          <div className="course-name">{course.name}</div>
                        </div>
                      </div>
                      <p style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                        marginTop: '8px'
                      }}>
                        {course.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className={visibleSections.has('skills') ? 'visible' : ''}>
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <div className="skill-category" key={index}>
                <h3>
                  {category === "Languages" && <Code size={18} />}
                  {category === "AI/ML" && <Sparkles size={18} />}
                  {category === "Cloud & DevOps" && <Briefcase size={18} />}
                  {category}
                </h3>
                <div className="skill-list">
                  {items.map((skill, i) => (
                    <span 
                      className={`skill-item ${activeSkill === `${category}-${i}` ? 'active' : ''}`}
                      key={i}
                      onClick={() => setActiveSkill(activeSkill === `${category}-${i}` ? null : `${category}-${i}`)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className={visibleSections.has('certifications') ? 'visible' : ''}>
          <h2>Certifications</h2>
          {certifications.map((cert, index) => (
            <div className="certification-item" key={index}>
              <div className="cert-header">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-meta">
                    <span className="cert-date">{cert.date}</span>
                    {cert.credentialId && (
                      <span className="cert-id">ID: {cert.credentialId}</span>
                    )}
                  </div>
                  {cert.link && (
                    <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                      View Credential
                      <ExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section id="education" className={visibleSections.has('education') ? 'visible' : ''}>
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
          <p>© 2026 Ishaan Parekh. Built with React.</p>
        </footer>
      </div>
    </div>
  );
}