// src/pages/Home.jsx
import React, { useEffect } from 'react';
import './Home.css';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    gsap.from('.hero h1', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('.hero-content', {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.2
    });

    const bookingBtn = document.querySelector('.open-booking');
    if (bookingBtn) {
      bookingBtn.addEventListener('click', () => {
        console.log('Ouverture du formulaire de RDV');
        // TODO: Connecter à BookingModal si nécessaire
      });
    }

    return () => {
      if (bookingBtn) {
        bookingBtn.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>L'Art des Tresses Africaines</h1>
          <p className="subtitle">SALON COMPLET | TRESSES AFRICAINES | SOINS CAPILLAIRES</p>
          <div className="cta-buttons">
            <a href="#services" className="btn btn-gold">Nos Services</a>
            <button className="btn btn-transparent open-booking">Prendre RDV</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
