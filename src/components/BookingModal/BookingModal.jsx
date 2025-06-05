import React, { useState } from 'react';
import './BookingModal.css'; // Assure-toi que ce fichier contient le CSS que tu as donné

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    coiffeuse: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, date, time, coiffeuse } = formData;

    alert(
      `🎉 Réservation confirmée !\n\n👤 Nom : ${name}\n📞 Téléphone : ${phone}\n✅ Service : ${service}\n📅 Date : ${date}\n🕒 Heure : ${time}\n💇🏽‍♀️ Coiffeuse : ${coiffeuse}`
    );

    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      coiffeuse: ''
    });

    onClose(); // Ferme la modale après soumission
  };

  if (!isOpen) return null;

  return (
    <div className="booking-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Réserver une Création Capillaire</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Votre nom :</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nom complet"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone :</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Ex : 514-123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Type de Service :</label>
            <select id="service" value={formData.service} onChange={handleChange} required>
              <option value="">Choisissez votre style</option>
              <option value="Box Braids">Box Braids</option>
              <option value="Fulani Braids">Fulani Braids</option>
              <option value="Vanilles/Twists">Vanilles/Twists</option>
              <option value="Dreads">Dreads</option>
              <option value="Accessoires">Pose d'Accessoires</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date :</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Heure :</label>
            <select id="time" value={formData.time} onChange={handleChange} required>
              <option value="">Sélectionnez une heure</option>
              <option value="09:00">9:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="coiffeuse">Coiffeuse :</label>
            <select id="coiffeuse" value={formData.coiffeuse} onChange={handleChange} required>
              <option value="">Choisissez votre coiffeuse</option>
              <option value="Marie Haby">Marie Haby</option>
              <option value="Adriane">Adriane</option>
              <option value="Marie.T">Marie.T</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">Confirmer la Réservation</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
