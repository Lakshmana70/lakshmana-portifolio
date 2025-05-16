import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/images/logo.png'; // Add your logo image

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          {/* <img src={logo} alt="Logo" className="navbar-logo me-2" /> */}
          <span className="brand-text">Lakshmana</span>
        </Link>
        
        <button 
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/')}`} 
                to="/"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-home me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about')}`} 
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-user me-1"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/projects')}`} 
                to="/projects"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-code me-1"></i>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/skills')}`} 
                to="/skills"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-cogs me-1"></i>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact')}`} 
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-envelope me-1"></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 