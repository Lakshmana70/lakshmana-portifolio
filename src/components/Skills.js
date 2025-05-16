import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Bootstrap', level: 88 },
        {name:'Next.js', level: 70 },
        {name:'Vue.js', level: 70 },
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Mongoose', level: 75 },
        { name: 'Sequelize', level: 70 }, 
        { name: 'JWT', level: 80 },
        { name: 'Socket.io', level: 70 },
        { name: 'Prisma', level: 70 },
        {name:'postgreSQL', level: 70 },

      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 88 },
        {name:' GitHub', level: 85 },
        {name:'postman', level: 80 },
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-content">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-center mb-5">My Skills</h2>
            
            <div className="row g-4">
              {skillCategories.map((category, index) => (
                <div key={index} className="col-lg-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h3 className="card-title text-center mb-4">{category.category}</h3>
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="mb-4">
                          <div className="d-flex justify-content-between mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: `${skill.level}%` }}
                              aria-valuenow={skill.level} 
                              aria-valuemin="0" 
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="row mt-5">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center mb-4">Additional Skills</h3>
                    <div className="row text-center">
                      <div className="col-md-3 mb-3">
                        <div className="p-3 border rounded">
                          <i className="fas fa-mobile-alt fa-2x mb-3"></i>
                          <h5>Responsive Design</h5>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="p-3 border rounded">
                          <i className="fas fa-code fa-2x mb-3"></i>
                          <h5>Clean Code</h5>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="p-3 border rounded">
                          <i className="fas fa-search fa-2x mb-3"></i>
                          <h5>SEO Optimization</h5>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="p-3 border rounded">
                          <i className="fas fa-users fa-2x mb-3"></i>
                          <h5>Team Collaboration</h5>
                        </div>
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

export default Skills; 