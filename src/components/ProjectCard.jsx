import { motion } from 'framer-motion';
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
