import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: 'Book Store Website',
            description: 'The Book Store website built with the MERN stack (MongoDB, Express.js, React, and Node.js) is a web application designed to allow users to browse and manage a variety of books.',
            link: 'https://github.com/gaurav25701/BookStore',
            image: '/images/BookStore.jpg',
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
            category: 'Full Stack'
        },
        {
            title: 'Ecommerce Website',
            description: 'An e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) is a web application designed to facilitate the buying and selling of products online, leveraging the power of full-stack JavaScript technologies.',
            link: 'https://github.com/gaurav25701/Dukaan',
            image: '/images/Ecommerce.jpg',
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
            category: 'Full Stack'
        }
    ];

    return (
        <div className="projects-container">
            <div className="projects-header">
                <div className="header-content">
                    <h1 className="projects-title">My Projects</h1>
                    <div className="title-bar"></div>
                    <p className="projects-subtitle">
                        A collection of my recent work and personal projects
                    </p>
                </div>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div 
                        className="project-card"
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="project-image-container">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="project-image"
                            />
                            <div className="project-overlay">
                                <div className="project-category">{project.category}</div>
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-tech-stack">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <span className="link-text">View Project</span>
                                    <svg 
                                        className="link-icon" 
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-footer">
                <a 
                    href="https://github.com/gaurav25701" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <span>View More on GitHub</span>
                    <svg 
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="github-icon"
                    >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Projects;