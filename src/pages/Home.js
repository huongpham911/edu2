import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">SMAN 3 KUTACANE</h1>
          <p className="hero-subtitle">Unggul di Bumi Bertuah</p>
          <p className="hero-description">
            Mewujudkan Generasi Cerdas, Berkarakter, dan Berprestasi
          </p>
          <button className="hero-button">Jelajahi Lebih Lanjut</button>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <h2 className="section-title">Selamat Datang di SMAN 3 Kutacane</h2>
          <p className="section-description">
            SMAN 3 Kutacane merupakan sekolah menengah atas negeri yang telah diakui kualitasnya 
            melalui akreditasi B. Dengan luas tanah 12.000 meter persegi, kami menyediakan lingkungan 
            belajar yang kondusif dengan fasilitas yang memadai untuk mendukung proses pembelajaran yang efektif.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Keunggulan Kami</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Akreditasi B</h3>
              <p>Sekolah terakreditasi dengan standar pendidikan yang berkualitas</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏫</div>
              <h3>Fasilitas Lengkap</h3>
              <p>Luas tanah 12.000 m² dengan ruang belajar yang memadai</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Akses Internet</h3>
              <p>Dilengkapi dengan jaringan internet untuk mendukung pembelajaran digital</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Listrik PLN</h3>
              <p>Sumber listrik yang stabil untuk kegiatan belajar mengajar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="quick-info">
        <div className="container">
          <h2 className="section-title">Informasi Sekolah</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">NPSN:</span>
              <span className="info-value">10103098</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status:</span>
              <span className="info-value">Negeri</span>
            </div>
            <div className="info-item">
              <span className="info-label">Bentuk Pendidikan:</span>
              <span className="info-value">SMA</span>
            </div>
            <div className="info-item">
              <span className="info-label">Kepala Sekolah:</span>
              <span className="info-value">Ali Sadikin</span>
            </div>
            <div className="info-item">
              <span className="info-label">Sistem Pembelajaran:</span>
              <span className="info-value">6 Hari (Pagi)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Kecamatan:</span>
              <span className="info-value">Babussalam</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Bergabunglah Bersama Kami</h2>
          <p>Raih masa depan cerah bersama SMAN 3 Kutacane</p>
          <div className="cta-buttons">
            <a href="/kontak" className="cta-button primary">Hubungi Kami</a>
            <a href="/tentang" className="cta-button secondary">Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
