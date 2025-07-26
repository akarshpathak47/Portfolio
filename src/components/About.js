import React from 'react';
import './About.css';
import himani from './images/himani.jpg';
import resume from './images/resume.pdf';

const About = () => {
  return (
    <section className="about-section" id='about'>
      <div className="about-top">
        <div className="profile-pic">
          <img src={himani} alt="Himani Rajput" />
        </div>
        <div className="intro-text">
          <h1>👋 Hi, I'm <span>Himani Rajput</span></h1>
          <p>
            I’m a passionate IT enthusiast who loves building creative and scalable web applications.
            I specialize in <strong>ReactJS, JavaScript, C++</strong>, and I’m diving deep into <strong>AI/ML</strong> technologies.
          </p>
          <p>
            Currently pursuing my B.Tech in IT at MMMUT,Gkp with a CGPA of 8.01 and SGPA of 8.78 till 6th sem, I enjoy turning problems into elegant, efficient code.
          </p>
          <p>
            When I’m not coding, you’ll find me writing, dancing, or exploring the latest tech trends.
          </p>

          <div className="buttons">
            <a href={resume} className="btn primary" download>📄 Download Resume</a>
            <a href="https://www.linkedin.com/in/himani-rajput-094637267/" className="btn secondary" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a href="https://github.com/HimaniRajput-2003" className="btn secondary" target="_blank" rel="noreferrer">💻 GitHub</a>
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <div className="info-block">
          <h2>📌 Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span  />
              <div className="timeline-content">
                <h4>Bluestock Fintech <span>(Mar – May 2025)</span></h4>
                <ul>
                  <li>Built stock market learning tools and dashboards.</li>
                  <li>Enhanced UX via collaborative design work.</li>
                  <li>Optimized backend services for better performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="info-block">
          <h2>🎓 Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span  />
              <div className="timeline-content">
                <h4>B.Tech IT (2022–2026)</h4>
                <p>MMMUT – CGPA: 8.01</p>
              </div>
            </div>
            <div className="timeline-item">
              <span  />
              <div className="timeline-content">
                <h4>Senior Secondary (2021)</h4>
                <p>90.20%</p>
              </div>
            </div>
            <div className="timeline-item">
              <span />
              <div className="timeline-content">
                <h4>Secondary (2019)</h4>
                <p>91.60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
