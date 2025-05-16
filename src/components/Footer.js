import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-0">
      <div className="container">
        {/* <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>About Me</h5>
            <p className="text-muted">
              A passionate web developer dedicated to creating beautiful and functional websites.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
              <li><Link to="/projects" className="text-muted text-decoration-none">Projects</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect</h5>
            <div className="social-links">
              <a href="#" className="text-muted me-3">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div> */}
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} Your Portfolio. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Made with <i className="fas fa-heart text-danger"></i> by Palla Lakshmana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 