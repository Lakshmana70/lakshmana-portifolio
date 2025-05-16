import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white  Content-container">
              <ScrollAnimation>
                <h1 className="display-3 fw-bold mb-4">Hi, I'm Palla Lakshmana</h1>
                <p className="lead mb-4 fs-4">
                  Full Stack Developer 
                </p>
                <p className="mb-4">
                  Crafting beautiful and functional websites with modern technologies
                </p>
                <div className="d-flex gap-3">
                  {/* <Link to="/projects" className="btn btn-primary btn-lg">
                    <i className="fas fa-code me-2"></i>
                    View My Work
                  </Link> */}
                  <Link to="/contact" className="btn btn-outline-light btn-lg">
                    <i className="fas fa-envelope me-2"></i>
                    Contact Me
                  </Link>
                  <a href="\Palla Lakshmana  - Resume.pdf" download className="btn btn-outline-light btn-lg">
                    <i className="fas fa-download me-2"></i>
                    Download CV
                  </a>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <ScrollAnimation>
                <div className="profile-image-container">
                  <div className="profile-background-shape"></div>
                  <div className="profile-image-wrapper">
                    <div className="profile-image">
                      <img 
                        src="IMG_20250106_185635585.jpg"
                        alt="Profile"
                        className="img-fluid"
                        
                      />
                    </div>
                   
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
    </div>
  );
};

export default Home; 