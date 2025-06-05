// src/pages/Team.jsx
import React, { useEffect } from 'react';
import './Team.css';

const teamData = [
  {
    name: "Adriane",
    specialty: "Tresses Collées & Fulani",
    image: "assets/images/adriane.jpg",
    bio: "10 ans d'expérience en tresses traditionnelles"
  },
  {
    name: "Marie",
    specialty: "Vanilles & Protections",
    image: "assets/images/marie.jpg",
    bio: "Spécialiste des soins capillaires naturels"
  },
  {
    name: "Marie.T",
    specialty: "Dreads & Locs",
    image: "assets/images/Marie T.jpg",
    bio: "Artiste certifiée en dreadlocks"
  }
];

const Team = () => {
  useEffect(() => {
    const confirmBtn = document.getElementById('confirmBooking');
    const cancelBtn = document.getElementById('cancelSelection');

    if (confirmBtn && cancelBtn) {
      confirmBtn.addEventListener('click', handleConfirm);
      cancelBtn.addEventListener('click', handleCancel);
    }

    return () => {
      if (confirmBtn) confirmBtn.removeEventListener('click', handleConfirm);
      if (cancelBtn) cancelBtn.removeEventListener('click', handleCancel);
    };
  }, []);

  const openModal = (name) => {
    const modal = document.querySelector('.modal-overlay');
    const modalText = document.getElementById('modalText');
    if (modal && modalText) {
      modalText.textContent = `Vous avez sélectionné ${name} pour votre prochain RDV. Souhaitez-vous continuer vers le calendrier de réservation ?`;
      modal.style.display = 'flex';
    }
  };

  const handleConfirm = () => {
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.style.display = 'none';

    const bookingBtn = document.querySelector('.open-booking, .btn-book');
    if (bookingBtn) {
      bookingBtn.click();
    } else {
      window.location.href = '#booking';
    }
  };

  const handleCancel = () => {
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.style.display = 'none';
  };

  return (
    <section className="team-section" id="team">
      <h2>Notre Équipe</h2>
      <p className="section-subtitle">Des mains expertes pour vos tresses uniques</p>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} onError={(e) => e.target.style.display = 'none'} />
              <div className="image-placeholder"></div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <span className="member-specialty">{member.specialty}</span>
              <p>{member.bio}</p>
              <button className="select-btn" onClick={() => openModal(member.name)}>
                Sélectionner
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal HTML statique pour confirmation */}
      <div className="modal-overlay" style={{ display: 'none' }}>
        <div className="modal-content">
          <h3>Confirmer votre choix</h3>
          <p id="modalText"></p>
          <button className="btn btn-gold" id="confirmBooking">Prendre RDV</button>
          <button className="btn btn-transparent" id="cancelSelection">Annuler</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
