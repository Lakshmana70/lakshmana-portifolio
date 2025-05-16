import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-center mb-5">Get In Touch</h2>
            
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title mb-4">Contact Information</h3>
                    <div className="d-flex mb-3">
                      <i className="fas fa-map-marker-alt fa-2x text-primary me-3"></i>
                      <div>
                        <h5>Location</h5>
                        <p>Hyderabad, Telangana, India</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <i className="fas fa-envelope fa-2x text-primary me-3"></i>
                      <div>
                        <h5>Email</h5>
                        <p>lakshmanapalla1@gmail.com</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <i className="fas fa-phone fa-2x text-primary me-3"></i>
                      <div>
                        <h5>Phone</h5>
                        <p>+91 7095754234</p>
                      </div>
                    </div>
                    
                    <h4 className="mt-4 mb-3">Follow Me</h4>
                    <div className="social-links">
                      <a href="https://www.linkedin.com/in/pallalakshmana/" className="btn btn-outline-primary me-2">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/Lakshmana70" className="btn btn-outline-primary me-2">
                        <i className="fab fa-github"></i>
                      </a>
                      {/* <a href="#" className="btn btn-outline-primary me-2">
                        <i className="fab fa-twitter"></i>
                      </a> */}
                      <a href="mailto:lakshmanapalla1@gmail.com" className="btn btn-outline-primary">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title mb-4">Send Message</h3>
                    <form onSubmit={handleSubmit} >
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact; 