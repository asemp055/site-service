import React, { useState } from 'react';
import './Header.css';

const Header = ({ onBook }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/images/logoM.png" alt="Madri Braids Logo" />
          <span className="logo-text">Madri Braids</span>
        </div>

        {/* Bouton Hamburger (visible uniquement en mobile) */}
        <button 
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menu principal (liens) */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Équipe</a></li>
          <li><a href="#about">À propos</a></li>
          <li>
            <button className="btn-book" onClick={onBook}>Prendre RDV</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;