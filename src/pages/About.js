import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <h1>Tentang Kami</h1>
          <p>Mengenal lebih dekat SMAN 3 Kutacane</p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="school-profile">
        <div className="container">
          <div className="profile-content">
            <div className="profile-text">
              <h2>Profil SMAN 3 Kutacane</h2>
              <p>
                SMAN 3 Kutacane adalah Sekolah Menengah Atas Negeri yang terletak di 
                Jl. Raja Bintang Mbarung, Kecamatan Babussalam, Kabupaten Aceh Tenggara, 
                Provinsi Aceh. Sebagai institusi pendidikan yang telah terakreditasi B, 
                kami berkomitmen untuk memberikan pendidikan berkualitas tinggi bagi 
                generasi muda Kutacane dan sekitarnya.
              </p>
              <p>
                Dengan luas lahan mencapai 12.000 meter persegi, sekolah kami menyediakan 
                lingkungan belajar yang kondusif dan nyaman. Fasilitas modern seperti 
                akses internet, sumber listrik PLN yang stabil, serta berbagai sarana 
                pendukung lainnya tersedia untuk mendukung proses pembelajaran yang optimal.
              </p>
              <p>
                Di bawah kepemimpinan Bapak Ali Sadikin, SMAN 3 Kutacane terus berkembang 
                dan berinovasi dalam memberikan pelayanan pendidikan terbaik. Kami menerapkan 
                sistem pembelajaran 6 hari dengan waktu belajar pagi hari untuk memaksimalkan 
                konsentrasi dan produktivitas siswa.
              </p>
            </div>
            <div className="profile-info-box">
              <h3>Data Sekolah</h3>
              <ul className="profile-info-list">
                <li><strong>NPSN:</strong> 10103098</li>
                <li><strong>Status:</strong> Negeri</li>
                <li><strong>Akreditasi:</strong> B</li>
                <li><strong>Bentuk Pendidikan:</strong> SMA</li>
                <li><strong>Kepala Sekolah:</strong> Ali Sadikin</li>
                <li><strong>Operator:</strong> smankutacane03@gmail.com</li>
                <li><strong>Website:</strong> sman3kutacane.my.id</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h2>Visi</h2>
              <p>
                "Terwujudnya peserta didik yang beriman, bertaqwa, cerdas, terampil, 
                mandiri, dan berwawasan global untuk menjadi generasi unggul di Bumi Bertuah"
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">🚀</div>
              <h2>Misi</h2>
              <ul>
                <li>Meningkatkan keimanan dan ketaqwaan melalui pengamalan ajaran agama</li>
                <li>Mengoptimalkan proses pembelajaran dan bimbingan</li>
                <li>Mengembangkan bidang ilmu pengetahuan dan teknologi berdasarkan minat, bakat, dan potensi peserta didik</li>
                <li>Membina kemandirian peserta didik melalui kegiatan pembiasaan, kewirausahaan, dan pengembangan diri yang terencana dan berkesinambungan</li>
                <li>Menjalin kerjasama yang harmonis antar warga sekolah dan lembaga terkait</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="school-values">
        <div className="container">
          <h2 className="section-title">Nilai-Nilai Kami</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3>Inovasi</h3>
              <p>Mendorong kreativitas dan inovasi dalam pembelajaran</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Integritas</h3>
              <p>Menjunjung tinggi kejujuran dan nilai-nilai moral</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌟</div>
              <h3>Keunggulan</h3>
              <p>Berkomitmen untuk mencapai prestasi terbaik</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>Pertumbuhan</h3>
              <p>Terus berkembang dan belajar sepanjang hayat</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="school-history">
        <div className="container">
          <h2 className="section-title">Sejarah Singkat</h2>
          <div className="history-content">
            <p>
              SMAN 3 Kutacane didirikan sebagai respons terhadap kebutuhan akan pendidikan 
              menengah atas yang berkualitas di wilayah Kutacane, Kabupaten Aceh Tenggara. 
              Sejak awal berdirinya, sekolah ini telah menjadi salah satu institusi pendidikan 
              terkemuka di kawasan tersebut.
            </p>
            <p>
              Berlokasi strategis di Jl. Raja Bintang Mbarung, Desa Mbarung, Kecamatan Babussalam, 
              sekolah kami telah melayani ribuan siswa dari berbagai latar belakang. Dengan dukungan 
              pemerintah dan masyarakat, SMAN 3 Kutacane terus berkembang dan meningkatkan kualitas 
              pendidikannya.
            </p>
            <p>
              Prestasi demi prestasi telah diraih oleh siswa-siswi kami, baik di tingkat kabupaten, 
              provinsi, maupun nasional. Hal ini membuktikan komitmen kami dalam mencetak generasi 
              yang tidak hanya cerdas secara akademik, tetapi juga memiliki karakter yang kuat dan 
              siap menghadapi tantangan masa depan.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities">
        <div className="container">
          <h2 className="section-title">Fasilitas Sekolah</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <span className="facility-icon">🏫</span>
              <h3>Ruang Kelas</h3>
              <p>Ruang kelas yang nyaman dan kondusif untuk belajar</p>
            </div>
            <div className="facility-card">
              <span className="facility-icon">🔬</span>
              <h3>Laboratorium</h3>
              <p>Laboratorium IPA lengkap untuk praktikum</p>
            </div>
            <div className="facility-card">
              <span className="facility-icon">💻</span>
              <h3>Lab Komputer</h3>
              <p>Fasilitas komputer dengan akses internet</p>
            </div>
            <div className="facility-card">
              <span className="facility-icon">📚</span>
              <h3>Perpustakaan</h3>
              <p>Koleksi buku yang lengkap dan up-to-date</p>
            </div>
            <div className="facility-card">
              <span className="facility-icon">⚽</span>
              <h3>Lapangan Olahraga</h3>
              <p>Lapangan untuk berbagai kegiatan olahraga</p>
            </div>
            <div className="facility-card">
              <span className="facility-icon">🕌</span>
              <h3>Musholla</h3>
              <p>Tempat ibadah yang nyaman dan bersih</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
