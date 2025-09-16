import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Terima kasih! Pesan Anda telah dikirim.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <h1>Hubungi Kami</h1>
          <p>Kami siap membantu Anda dengan informasi yang diperlukan</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Informasi Kontak</h2>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-text">
                    <h3>Alamat</h3>
                    <p>JL. RAJA BINTANG MBARUNG</p>
                    <p>Desa Mbarung, Kecamatan Babussalam</p>
                    <p>Kabupaten Aceh Tenggara 24651</p>
                    <p>Provinsi Aceh</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>informasi@sman3kutacane.my.id</p>
                    <p>smankutacane03@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🌐</div>
                  <div className="info-text">
                    <h3>Website</h3>
                    <p>sman3kutacane.my.id</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🏫</div>
                  <div className="info-text">
                    <h3>NPSN</h3>
                    <p>10103098</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subjek"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Pesan Anda"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Lokasi Kami</h2>
          <div className="map-container">
            <iframe
              title="SMAN 3 Kutacane Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2691000000003!2d97.8055!3d3.4805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjgnNDkuOCJOIDk38KwNDgnMTkuOCJF!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map-info">
            <p>
              SMAN 3 Kutacane berlokasi strategis di Jalan Raja Bintang Mbarung, 
              Kecamatan Babussalam, Kabupaten Aceh Tenggara. Lokasi sekolah mudah 
              diakses dari berbagai arah dan dekat dengan fasilitas umum.
            </p>
            <a
              href="https://maps.app.goo.gl/xyBx4G72HvseUm6A7"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              Buka di Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="additional-info">
        <div className="container">
          <div className="info-cards">
            <div className="card">
              <h3>Jam Operasional</h3>
              <p>Senin - Sabtu</p>
              <p>07:00 - 15:00 WIB</p>
              <p>Sistem pembelajaran 6 hari (Pagi)</p>
            </div>
            <div className="card">
              <h3>Kepala Sekolah</h3>
              <p>Ali Sadikin</p>
              <p>Memimpin dengan dedikasi untuk pendidikan berkualitas</p>
            </div>
            <div className="card">
              <h3>Update Terakhir</h3>
              <p>15 Mei 2025</p>
              <p>Data sekolah terus diperbarui untuk informasi akurat</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
