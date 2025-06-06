// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ onBook }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/images/logoM.png" alt="Madri Braids Logo" />
          <span className="logo-text">Madri Braids</span>
          </div>

        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Équipe</a></li>
          <li><a href="#about">À propos</a></li>
          <li><button className="btn-book" onClick={onBook}>Prendre RDV</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 