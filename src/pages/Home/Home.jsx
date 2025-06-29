// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = ({ onBook }) => {
  
  
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>L'Art des Tresses Africaines</h1>
          <p className="subtitle">SALON COMPLET | TRESSES AFRICAINES | SOINS CAPILLAIRES</p>
          <div className="cta-buttons">
            <a href="#services" className="btn btn-gold">Nos Services</a>
            <button className="btn btn-transparent" onClick={onBook}>Prendre RDV</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;