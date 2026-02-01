import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import '../styles/Experience.css';

const Experience = ({ data }) => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <div className="section-label">PROFESSIONAL JOURNEY</div>
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          {data.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-icon">
                <Briefcase size={20} />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

