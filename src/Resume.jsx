
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

const Resume = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
            <section className="mb-4">
                <div className="d-flex align-items-center mb-3">
                    <div>
                    <h2>Bediya Karthik</h2>
                    <p>ReactJs Developer</p>
                    </div>
                    <img
                    src="https://source.unsplash.com/oQuP_XBjOMY/80x80" 
                    alt="Profile"
                    className="ml-3 rounded-circle"
                    style={{ width: '80px', height: '80px' }}
                    />
                </div>
            </section>

          <section className="mb-4">
            <h3>Education</h3>
            <div className="mb-2">
              <h4>Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology</h4>
              <p>Bachelor of Science in Computer Science</p>
              <p>Graduated: Jun 2022</p>
            </div>
          </section>

          <section className="mb-4">
            <h3>Experience</h3>
            <div className="mb-2">
              <h4>Sinfolix Technologies</h4>
              <p>ReactJs Developer</p>
              <p>Nov 2023 - Present</p>
              <ul>
                <li>Developed and maintained web applications using ReactJS.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
              </ul>
            </div>
          </section>

          <section className="mb-4">
            <h3>Skills</h3>
            <ul>
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>HTML5, CSS3</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Webpack</li>
                <li>Babel</li>
                <li>Responsive Design</li>
                <li>Unit Testing (e.g., Jest, React Testing Library)</li>
                <li>Version Control (e.g., Git, GitHub)</li>
                <li>Code Review</li>
                <li>Debugging and Troubleshooting</li>
                <li>Agile/Scrum Methodology</li>
                <li>CI/CD (Continuous Integration/Continuous Deployment)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
