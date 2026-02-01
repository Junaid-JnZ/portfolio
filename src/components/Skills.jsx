import React from 'react';
import { Code, Database, Cloud, Wrench, Sparkles } from 'lucide-react';
import '../styles/Skills.css';

const Skills = ({ data }) => {
  const getIcon = (category) => {
    const icons = {
      'Programming Languages': <Code size={24} />,
      'Frontend': <Code size={24} />,
      'Backend': <Code size={24} />,
      'Databases': <Database size={24} />,
      'Cloud & Infrastructure': <Cloud size={24} />,
      'AI/ML': <Sparkles size={24} />,
      'Tools & Technologies': <Wrench size={24} />
    };
    return icons[category] || <Code size={24} />;
  };

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="section-label">TECHNICAL EXPERTISE</div>
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {Object.entries(data).map(([category, skills], index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{getIcon(category)}</div>
              <h3 className="skill-category">{category}</h3>
              <div className="skill-tags">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

