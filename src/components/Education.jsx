import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import '../styles/Education.css';

const Education = ({ data, certifications }) => {
  return (
    <section className="education-section" id="education">
      <div className="section-container">
        <div className="section-label">ACADEMIC BACKGROUND</div>
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-content">
          <div className="education-list">
            {data.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>
                <div className="education-details">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                  <div className="education-period">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {certifications && certifications.length > 0 && (
            <div className="certifications-list">
              <h3 className="certifications-title">Certifications</h3>
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="certification-icon">
                    <Award size={20} />
                  </div>
                  <div className="certification-details">
                    <h4 className="certification-name">{cert.name}</h4>
                    <p className="certification-issuer">{cert.issuer}</p>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;

