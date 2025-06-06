import React, { useState } from 'react';
import './BookingModal.css'; // si tu as un fichier de styles

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    appointmentDate: '',
    appointmentTime: '',
    coiffeuse: '',
    clientName: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      serviceType,
      appointmentDate,
      appointmentTime,
      coiffeuse,
      clientName,
      phoneNumber,
    } = formData;

    alert(`🎉 Réservation confirmée !
✅ Service : ${serviceType}
📅 Date : ${appointmentDate}
🕒 Heure : ${appointmentTime}
💇🏽‍♀️ Coiffeuse : ${coiffeuse}
👤 Client : ${clientName}
📞 Téléphone : ${phoneNumber}`);

    onClose(); // Fermer le modal
    setFormData({
      serviceType: '',
      appointmentDate: '',
      appointmentTime: '',
      coiffeuse: '',
      clientName: '',
      phoneNumber: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="booking-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Réserver une Création Capillaire</h2>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="clientName">Nom :</label>
            <input
              type="text"
              id="clientName"
              required
              value={formData.clientName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Téléphone :</label>
            <input
              type="tel"
              id="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="serviceType">Type de Service :</label>
            <select
              id="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="">Choisissez votre style</option>
              <option value="box-braids">Box Braids</option>
              <option value="fulani">Fulani Braids</option>
              <option value="vanilles">Vanilles/Twists</option>
              <option value="dreads">Dreads</option>
              <option value="accessoires">Pose d'Accessoires</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate">Date :</label>
            <input
              type="date"
              id="appointmentDate"
              required
              value={formData.appointmentDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointmentTime">Heure :</label>
            <select
              id="appointmentTime"
              required
              value={formData.appointmentTime}
              onChange={handleChange}
            >
              <option value="">Sélectionnez une heure</option>
              <option value="09:00">9:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="coiffeuse">Coiffeuse :</label>
            <select
              id="coiffeuse"
              required
              value={formData.coiffeuse}
              onChange={handleChange}
            >
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
