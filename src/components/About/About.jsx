import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">À Propos de Madri Braids</h2>
        
        <div className="about-content">
          {/* Bulle de description */}
          <div className="speech-bubble">
            <div className="bubble-content">
              <p>
                <span className="bubble-arrow"></span>
                Madri Braids est un salon spécialisé dans les tresses africaines traditionnelles et contemporaines.
                Nous créons des styles uniques qui mettent en valeur votre beauté naturelle tout en protégeant 
                la santé de vos cheveux.
              </p>
            </div>
          </div>

          {/* Section Contact compacte */}
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-item">
                <span className="material-icons">place</span>
                <div>
                  <h4>Adresse</h4>
                  <p>123 Rue des Tresses, Ottawa</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="material-icons">schedule</span>
                <div>
                  <h4>Horaires</h4>
                  <p>Lun-Ven: 9h-19h<br/>Sam: 10h-16h</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="material-icons">call</span>
                <div>
                  <h4>Téléphone</h4>
                  <p>(613) 555-0199</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="material-icons">email</span>
                <div>
                  <h4>Email</h4>
                  <p>contact@madribraids.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="credits">
          <p>Conçu par Adriane Sempore & Marie Haby Youla</p>
          <p className="copyright">&copy; {new Date().getFullYear()} Madri Braids</p>
        </div>
      </div>
    </section>
  );
};

export default About;