import React, { useState } from 'react';
import './TeamBookingModal.css';

const TeamBookingModal = ({ isOpen, stylist, onClose, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    style: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, style, date, time } = formData;

    alert(`🎉 Réservation confirmée avec ${stylist.name} !\n✅ Style : ${style}\n📅 Date : ${date}\n🕒 Heure : ${time}\n👤 Client : ${name}\n📞 Téléphone : ${phone}`);

    onClose();
    setFormData({ name: '', phone: '', style: '', date: '', time: '' });
  };

  if (!isOpen || !stylist) return null;

  return (
    <div
      className="team-booking-overlay"
      onClick={(e) => {
        if (e.target.classList.contains('team-booking-overlay')) onCancel();
      }}
    >
      <div className="team-booking-modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onCancel}>&times;</span>
        <h2>Réserver avec {stylist.name}</h2>

        <form onSubmit={handleSubmit}>
          <label>Nom :</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Téléphone :</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Style :</label>
          <select name="style" value={formData.style} onChange={handleChange} required>
            <option value="">Choisir un style</option>
            <option value="box-braids">Box Braids</option>
            <option value="fulani">Fulani Braids</option>
            <option value="vanilles">Vanilles / Twists</option>
            <option value="dreads">Dreads</option>
          </select>

          <label>Date :</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Heure :</label>
          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Sélectionner une heure</option>
            <option value="09:00">9:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">2:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>

          <button type="submit" className="btn-confirm">Confirmer</button>
        </form>
      </div>
    </div>
  );
};

export default TeamBookingModal;
