import React from 'react';
import "./Skills.css";

const Skills = () => {
    const skillCategories = [
        {
            name: "Programming Languages",
            skills: ["Java", "JavaScript", ]
        },
        {
            name: "Web Technologies",
            skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", ]
        },
        {
            name: "Database",
            skills: ["MySQL", "MongoDB", ]
        },
        {
            name: "Libraries & Tools",
            skills: ["React.js", "Express.js", "Mongoose", "Node.js", "Git"]
        }
    ];

    return (
        <div className="skills-page">
            <div className="particles-overlay"></div>
            <div className="content-container">
                <h1 className="page-title">My Skills</h1>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h2 className="category-title">{category.name}</h2>
                            <ul className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;