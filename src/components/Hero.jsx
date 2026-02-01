import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import '../styles/Hero.css';

const Hero = ({ data }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="hero-container">
        <div className="hero-content" ref={titleRef}>
          <div className="hero-label">SOFTWARE ENGINEER</div>
          <h1 className="hero-title">{data.name}</h1>
          <p className="hero-subtitle">{data.title}</p>
          <p className="hero-description">{data.bio}</p>
          
          <div className="hero-info">
            <div className="info-item">
              <MapPin size={18} />
              <span>{data.location}</span>
            </div>
            <div className="info-item">
              <Mail size={18} />
              <span>{data.email}</span>
            </div>
            <div className="info-item">
              <Phone size={18} />
              <span>{data.phone}</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

