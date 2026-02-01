import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Footer from '../components/Footer';
import { mockData } from '../data/mock';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="portfolio">
      <Header />
      <main className="portfolio-main">
        <Hero data={data.personal} />
        <Experience data={data.experience} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Education data={data.education} certifications={data.certifications} />
      </main>
      <Footer data={data.personal} />
    </div>
  );
};

export default Portfolio;

