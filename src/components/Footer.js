import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SMAN 3 KUTACANE</h3>
            <p>Unggul di Bumi Bertuah</p>
            <p>Mencetak generasi cerdas, berkarakter, dan berprestasi</p>
          </div>
          
          <div className="footer-section">
            <h4>Link Cepat</h4>
            <ul className="footer-links">
              <li><a href="https://sman3kutacane.my.id/">Beranda</a></li>
              <li><a href="https://sman3kutacane.my.id/tentang">Tentang Kami</a></li>
              <li><a href="https://sman3kutacane.my.id/galeri">Galeri</a></li>
              <li><a href="https://sman3kutacane.my.id/kontak">Kontak</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kontak</h4>
            <p>📍 Jl. Raja Bintang Mbarung</p>
            <p>Kec. Babussalam, Aceh Tenggara</p>
            <p>📧 informasi@sman3kutacane.my.id</p>
            <p>🌐 sman3kutacane.my.id</p>
          </div>
          
          <div className="footer-section">
            <h4>Informasi</h4>
            <p>NPSN: 10103098</p>
            <p>Status: Negeri</p>
            <p>Akreditasi: B</p>
            <p>Kepala Sekolah: Ali Sadikin</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 SMAN 3 Kutacane. Semua hak dilindungi.</p>
          <p>Dibuat dengan ❤️ untuk pendidikan Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
