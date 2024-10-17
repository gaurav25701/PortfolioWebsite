import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-section contact-section">
                        <h3 className="section-title">Contact</h3>
                        <div className="contact-items">
                            <a href="mailto:gauravmishra25701@gmail.com" className="contact-item">
                                <svg className="contact-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                                </svg>
                                <span>gauravmishra25701@gmail.com</span>
                            </a>
                            <a href="tel:+919554649327" className="contact-item">
                                <svg className="contact-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                                </svg>
                                <span>+91-9554649327</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="copyright">
                        <p>© {new Date().getFullYear()} Gaurav Mishra. All rights reserved.</p>
                    </div>
                    <div className="footer-decoration">
                        <div className="decoration-dot"></div>
                        <div className="decoration-line"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;