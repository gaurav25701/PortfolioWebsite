import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="particles-overlay"></div>
            <div className="content-container">
                <div className="intro-section">
                    <div className="name-title">
                        <span className="greeting">Hello, I'm</span>
                        <h1 className="name">Gaurav Mishra</h1>
                        <div className="title-wrapper">
                            <span className="title-text">Full Stack Developer</span>
                            <div className="animated-bar"></div>
                        </div>
                    </div>
                    
                    <p className="description">
                        I'm passionate about building dynamic and engaging web applications,
                        transforming ideas into powerful digital solutions.
                    </p>

                    <div className="cta-container">
                        <a href="/Gaurav_Mishra_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                            <span className="btn-text">View Resume</span>
                            <span className="btn-icon">→</span>
                        </a>
                    </div>
                </div>

                <div className="social-container">
                    <div className="social-card">
                        <a href="https://github.com/gaurav25701" target="_blank" rel="noopener noreferrer" className="social-link github">
                            <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span className="social-text">GitHub</span>
                        </a>
                    </div>
                    <div className="social-card">
                        <a href="https://leetcode.com/u/gauravmishra25701/" target="_blank" rel="noopener noreferrer" className="social-link leetcode">
                            <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.981 2.312 1.494 3.81 1.494 1.497 0 2.826-.513 3.807-1.494l2.734-2.644c.514-.514.496-1.366-.039-1.901-.535-.535-1.387-.552-1.901-.038z"/>
                            </svg>
                            <span className="social-text">LeetCode</span>
                        </a>
                    </div>
                    <div className="social-card">
                        <a href="https://www.linkedin.com/in/gaurav-mishra-25701/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                            <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span className="social-text">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;