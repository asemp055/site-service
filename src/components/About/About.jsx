// src/components/About/About.jsx
import React from 'react';
import './About.css'; // Import du CSS classique

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">À Propos de Madri Braids</h2>
        
        <div className="about-content">
          {/* Section Entreprise */}
          <div className="about-card">
            <h3>Notre Salon</h3>
            <p>
              Madri Braids est un salon spécialisé dans les tresses africaines traditionnelles et contemporaines, 
              offrant des services de qualité pour mettre en valeur la beauté des cheveux naturels afro.
            </p>
            <div className="service-types">
              <span>Services :</span>
              <ul>
                <li>Tresses collées (Box braids, Fulani braids)</li>
                <li>Vanilles et twists</li>
                <li>Pose de perles et accessoires</li>
                <li>Soins capillaires spécialisés</li>
              </ul>
            </div>
          </div>

          {/* Section Coordonnées */}
          <div className="about-card">
            <h3>Nous Trouver</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <span>123 Rue des Tresses, Ottawa, ON</span>
              </div>
              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <span>(613) 555-0199</span>
              </div>
              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <span>contact@madribraids.com</span>
              </div>
              <div className="contact-item">
                <i className="bi bi-clock"></i>
                <span>Lun-Ven: 9h-19h | Sam: 10h-16h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Concepteurs */}
        <div className="credits">
          <h4>Conception du site</h4>
          <p>
            Site conçu par <strong>Adriane Sempore</strong> et <strong>Marie Haby Youla</strong> dans le cadre du cours SEG3525 - Université d'Ottawa
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Madri Braids. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;