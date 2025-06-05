import React from 'react';
import './Services.css'; // si tu as un fichier CSS spécifique

const Services = ({ onBook }) => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="text-center">Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/assets/images/box-braids.jpg" alt="Box Braids" />
            <h3>Tresses Collées</h3>
            <p>Box braids. Protection 4-6 semaines.</p>
            <p className="price">À partir de 120$</p>
            <button className="btn-book open-booking" onClick={onBook}>Prendre RDV</button>
            <button className="btn-cancel">Annuler</button>
          </div>

          <div className="service-card">
            <img src="/assets/images/vanilles.jpg" alt="Vanilles" />
            <h3>Vanilles & Twists</h3>
            <p>Style doux et naturel pour cheveux texturés. Durée 2-3 semaines.</p>
            <p className="price">À partir de 80$</p>
            <button className="btn-book open-booking" onClick={onBook}>Prendre RDV</button>
            <button className="btn-cancel">Annuler</button>
          </div>

          <div className="service-card">
            <img src="/assets/images/Fulani Braids.jpg" alt="Fulani Braids" />
            <h3>Nattes collées</h3>
            <p>Fulani Braids. Durée 3-5 semaines.</p>
            <p className="price">À partir de 120$</p>
            <button className="btn-book open-booking" onClick={onBook}>Prendre RDV</button>
            <button className="btn-cancel">Annuler</button>
          </div>

          <div className="service-card">
            <img src="/assets/images/Locs.jpg" alt="Locs" />
            <h3>Dreads locs</h3>
            <p>Style Durable. Durée 6 mois et plus.</p>
            <p className="price">À partir de 200$</p>
            <button className="btn-book open-booking" onClick={onBook}>Prendre RDV</button>
            <button className="btn-cancel">Annuler</button>
          </div>

          <div className="service-card">
            <img src="/assets/images/accessoires.jpg" alt="Accessoires" />
            <h3>Pose d'Accessoires</h3>
            <p>Perles, cauris et bijoux pour personnaliser vos tresses.</p>
            <p className="price">À partir de 15$</p>
            <button className="btn-book open-booking" onClick={onBook}>Prendre RDV</button>
            <button className="btn-cancel">Annuler</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
