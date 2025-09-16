import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          SMAN 3 KUTACANE
        </Link>
        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Beranda
          </Link>
          <Link to="/tentang" className="nav-link" onClick={() => setIsOpen(false)}>
            Tentang Kami
          </Link>
          <Link to="/galeri" className="nav-link" onClick={() => setIsOpen(false)}>
            Galeri
          </Link>
          <Link to="/kontak" className="nav-link" onClick={() => setIsOpen(false)}>
            Kontak
          </Link>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
