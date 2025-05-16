import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-center mb-5">About Me</h2>
            <div className="row">
              <div className="col-md-6">
                <p className="lead">
                  I'm a passionate web developer with a strong foundation in modern web technologies.
                  My journey in web development started with a curiosity for creating interactive
                  and user-friendly websites.
                </p>
                <p>
                  With expertise in React.js, JavaScript, and modern frontend frameworks,
                  I specialize in building responsive and scalable web applications that
                  deliver exceptional user experiences.
                </p>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title mb-4">Professional Info</h3>
                    <div className="mb-3">
                      {/* <h5>Experience</h5> */}
                      {/* <ul className="list-unstyled">
                        <li className="mb-2">🚀 Frontend Developer at Tech Corp (2020-Present)</li>
                        <li className="mb-2">💻 Web Developer at Digital Solutions (2018-2020)</li>
                        <li className="mb-2">🎓 Computer Science Graduate</li>
                      </ul> */}
                    </div>
                    <div className="mb-3">
                      <h5>Education</h5>
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-graduation-cap text-primary me-2"></i>
                            <div>
                              <h6 className="mb-1">Bachelor of Technology (B.Tech)</h6>
                              <p className="mb-0 ">Civil  Engineering</p>
                              <small className="">Usha Rama College of Engineering and Technology - 2021-2024</small>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-school text-primary me-2"></i>
                            <div>
                              <h6 className="mb-1">Diploma</h6>
                              <p className="mb-0 ">Civil Engineering</p>
                              <small className="">Usha Rama College of Engineering and Technology - 2017-2020</small>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-school text-primary me-2"></i>
                            <div>
                              <h6 className="mb-1">Secondary Education (10th)</h6>
                              <p className="mb-0 ">SSC</p>
                              <small className="">Best School - 2016-2017</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row mt-5">
              <div className="col-12">
                <h3 className="text-center mb-4">What I Do</h3>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="card-title">Frontend Development</h4>
                        <p className="card-text">
                          Creating responsive and interactive user interfaces using
                          modern frameworks and libraries.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="card-title">UI/UX Design</h4>
                        <p className="card-text">
                          Designing intuitive and user-friendly interfaces that enhance
                          the user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="card-title">Web Optimization</h4>
                        <p className="card-text">
                          Optimizing web applications for better performance and SEO.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About; 