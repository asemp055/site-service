// src/components/Team/Team.jsx
import React, { useState } from 'react';
import './Team.css';

const teamData = [
  {
    name: "Adriane",
    specialty: "Tresses Collées & Fulani",
    image: "/assets/images/adriane.jpg",
    bio: "10 ans d'expérience en tresses traditionnelles"
  },
  {
    name: "Marie",
    specialty: "Vanilles & Protections",
    image: "/assets/images/marie.jpg",
    bio: "Spécialiste des soins capillaires naturels"
  },
  {
    name: "Marie T",
    specialty: "Dreads & Locs",
    image: "/assets/images/Marie T.jpg",
    bio: "Artiste certifiée en dreadlocks"
  }
];

const Team = ({ onBook }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStylist, setSelectedStylist] = useState('');

  const openModal = (name) => {
    console.log("openModal déclenché pour :", name); // test debug
    setSelectedStylist(name);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    onBook?.(); // déclenche BookingModal
  };

  const handleCancel = () => setShowModal(false);

  return (
    <section className="team-section" id="team">
      <h2>Notre Équipe</h2>
      <p className="section-subtitle">Des mains expertes pour vos tresses uniques</p>

      <div className="team-grid">
        {teamData.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <span className="member-specialty">{member.specialty}</span>
              <p>{member.bio}</p>
              <button className="select-btn" onClick={() => openModal(member.name)}>Sélectionner</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={(e) => {
          if (e.target.classList.contains('modal-overlay')) handleCancel();
        }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={handleCancel}>&times;</span>
            <h3>Confirmer votre choix</h3>
            <p>Vous avez sélectionné <strong>{selectedStylist}</strong> pour votre prochain RDV.<br />Souhaitez-vous continuer vers la réservation ?</p>
            <div className="modal-actions">
              <button className="btn btn-gold" onClick={handleConfirm}>Prendre RDV</button>
              <button className="btn btn-transparent" onClick={handleCancel}>Annuler</button>
              </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
