import React, { useEffect, useState } from 'react';
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
                    <a href="/" className="logo-link">
                        <span className="logo-text">My Portflio</span>
                        <div className="logo-dot"></div>
                    </a>
                </div>

                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li>
                            <a 
                                href="/" 
                                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                            >
                                <span className="nav-link-text">Home</span>
                                <span className="nav-link-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/projects" 
                                className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}
                            >
                                <span className="nav-link-text">Projects</span>
                                <span className="nav-link-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;