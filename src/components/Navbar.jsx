import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        const setCurrentPath = () => {
            setActiveLink(window.location.pathname);
        };

        window.addEventListener('scroll', handleScroll);
        setCurrentPath();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <span className="logo-text">My Portfolio</span>
                        <div className="logo-dot"></div>
                    </Link>
                </div>

                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li>
                            <Link 
                                to="/" 
                                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                            >
                                <span className="nav-link-text">Home</span>
                                <span className="nav-link-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/skills" 
                                className={`nav-link ${activeLink === '/skills' ? 'active' : ''}`}
                            >
                                <span className="nav-link-text">Skills</span>
                                <span className="nav-link-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/projects" 
                                className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}
                            >
                                <span className="nav-link-text">Projects</span>
                                <span className="nav-link-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;