import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Loan Management System',
      description: 'Loan Management System is a web application that helps manage loan applications and approvals.',
      image: 'https://www.lovelycoding.org/wp-content/uploads/2022/09/Loan-Management-System.webp',
      technologies: ["HTML",'Bootstrap', 'CSS','React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: 'https://lms-final-frontend.vercel.app/login',
      githubLink: 'https://github.com/Lakshmana70/Lms-final-frontend'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Firebase', 'Bootstrap', 'Redux'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <div className="projects">
    <div className="projects-container py-5 mt-5  ">
      <div className="container">
        <ScrollAnimation>
          <h2 className="display-4 text-center mb-5">My Projects</h2>
        </ScrollAnimation>
        <div className="row g-4">
          {projects.map((project, index) => (
            <ScrollAnimation 
              key={project.id} 
              className="col-md-6 col-lg-4"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card h-100 project-card">
                <div className="card-img-wrapper overflow-hidden">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="badge bg-primary me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <div className="d-flex justify-content-between">
                    <a 
                      href={project.liveLink} 
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="btn btn-outline-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github me-2"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects; 