import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of images from the gallery folder
  const images = [
    { id: 1, src: '/gallery/2025.09.16 - 121 (1).png', title: 'Kegiatan Sekolah' },
    { id: 2, src: '/gallery/2025.09.16 - 121 (2).png', title: 'Fasilitas Sekolah' },
    { id: 3, src: '/gallery/2025.09.16 - 121 (3).png', title: 'Ruang Kelas' },
    { id: 4, src: '/gallery/2025.09.16 - 121 (4).png', title: 'Kegiatan Ekstrakurikuler' },
    { id: 5, src: '/gallery/2025.09.16 - 121 (5).png', title: 'Upacara Bendera' },
    { id: 6, src: '/gallery/2025.09.16 - 121 (6).png', title: 'Prestasi Siswa' },
    { id: 7, src: '/gallery/2025.09.16 - 121 (7).png', title: 'Laboratorium' },
    { id: 8, src: '/gallery/2025.09.16 - 121 (8).png', title: 'Perpustakaan' }
  ];

  const categories = [
    { name: 'Semua', count: images.length },
    { name: 'Fasilitas', count: 3 },
    { name: 'Kegiatan', count: 3 },
    { name: 'Prestasi', count: 2 }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {/* Header Section */}
      <section className="gallery-header">
        <div className="container">
          <h1>Galeri Foto</h1>
          <p>Dokumentasi kegiatan dan fasilitas SMAN 3 Kutacane</p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="gallery-categories">
        <div className="container">
          <div className="category-list">
            {categories.map((category, index) => (
              <button key={index} className="category-btn active">
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openModal(image)}
              >
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.title} />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h3>{image.title}</h3>
                      <p>Klik untuk memperbesar</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="modal-caption">
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Info Section */}
      <section className="gallery-info">
        <div className="container">
          <div className="info-content">
            <h2>Dokumentasi Sekolah</h2>
            <p>
              Galeri ini menampilkan berbagai momen penting dan fasilitas yang ada di 
              SMAN 3 Kutacane. Dari kegiatan pembelajaran sehari-hari hingga prestasi 
              yang telah diraih oleh siswa-siswi kami. Setiap foto menceritakan perjalanan 
              kami dalam memberikan pendidikan terbaik untuk generasi penerus bangsa.
            </p>
            <div className="gallery-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Kegiatan Tahunan</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Prestasi Siswa</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Ekstrakurikuler</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
