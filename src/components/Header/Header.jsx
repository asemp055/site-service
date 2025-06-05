// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Madri Braids</div>
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Équipe</a></li>
          <li><a href="#about">À propos</a></li>
          <li><button className="btn-book">Prendre RDV</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 