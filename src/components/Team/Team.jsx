// src/components/Team/Team.jsx
import React, { useState } from 'react';
import './Team.css';
import TeamBookingModal from '../BookingModal/TeamBookingModal'; 

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
  const [selectedStylist, setSelectedStylist] = useState(null);

  const openModal = (stylist) => {
    setSelectedStylist(stylist);
    setShowModal(true);
  };

 /* const handleConfirm = () => {
    setShowModal(false);
    onBook?.(); // déclenche BookingModal global si besoin
  };*/

  const handleCancel = () => {
    setShowModal(false);
    setSelectedStylist(null);
  };

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
              <button className="select-btn" onClick={() => openModal(member)}>
                Sélectionner
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Team-specific booking modal */}
      {showModal && (
        <TeamBookingModal
          isOpen={showModal}
          stylist={selectedStylist}
          onClose={handleCancel}
          onCancel={handleCancel}
        />
      )}
    </section>
  );
};

export default Team;
