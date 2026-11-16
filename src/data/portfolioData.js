export const PERSONAL_INFO = {
  name: "Dimas Adjie Wibowo",
  shortName: "Dimas",
  role: "Mobile & Web Developer Enthusiast",
  roles: [
    "Mobile & Web Developer Enthusiast",
    "Information Technology Student",
    "Software Development",
  ],
  email: "dimasadjiewibowodimas2904@gmail.com",
  phone: "081230038392", // Ganti dengan nomor WhatsApp aktif (format internasional tanpa +, contoh: 6281234567890)
  whatsappMessage: "Halo Dimas Adjie Wibowo, saya telah melihat landing page portofolio Anda dan tertarik untuk berdiskusi/berkolaborasi.",
  get whatsappLink() {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  github: "https://github.com/Dimasadjw",
  linkedin: "https://www.linkedin.com/in/dimas-adjie-wibowo",
  instagram: "https://www.instagram.com/dimsadjw__",
  aboutMe:
    "Saya adalah mahasiswa Teknologi Informasi dengan minat di bidang Software Development, khususnya pengembangan aplikasi Mobile dan Website. Saya memiliki antusiasme tinggi dalam mempelajari teknologi terkini, merancang UI/UX yang interaktif, serta membangun sistem dan aplikasi yang inovatif, fungsional, dan bermanfaat bagi pengguna.",
  heroSummary:
    "Mahasiswa Teknologi Informasi yang berfokus pada bidang Software Developer dalam mengembangkan solusi digital yang inovatif, fungsional, dan responsif.",
};

export const INITIAL_PROJECTS = [
  {
    id: 1,
    Title: "Sistem Informasi Kegiatan Ekstrakurikuler",
    Description:
      "Sistem informasi ekstrakurikuler berbasis Web untuk mengelola data kegiatan, pendaftaran anggota, jadwal latihan, serta monitoring kehadiran dan aktivitas ekstrakurikuler secara terstruktur.",
    Img: "sistemEkstrakurikuler.png",
    Link: "https://github.com/Dimsadjw",
    Github: "https://github.com/Dimasadjw",
    TechStack: ["PHP", "JavaScript", "CSS"],
    Features: [
      "Autentikasi Pengguna & Profil",
      "Manajemen Data Ekstrakurikuler",
      "Pendaftaran & Pengelolaan Anggota",
      "Manajemen Jadwal & Kehadiran",
      "Monitoring Aktivitas Ekstrakurikuler",
    ],
  },
  {
    id: 2,
    Title: "Generate Timeline AI",
    Description:
      "Platform berbasis web untuk membantu UMKM merencanakan strategi konten pemasaran menggunakan AI, dengan fitur manajemen toko, produk, dan pembuatan timeline konten secara otomatis.",
    Img: "timeline.png",
    Link: "https://github.com/Dimsadjw",
    Github: "https://github.com/Dimasadjw",
    TechStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Gemini API & Deepseek API",
    ],
    Features: [
      "Manajemen Data Toko & Produk",
      "Generate Timeline Konten Berbasis AI",
      "Pengaturan Durasi & Konten Mingguan",
      "Riwayat Generate Timeline",
      "Dashboard & Monitoring Data",
    ],
  },
  {
    id: 3,
    Title: "Sistem POS & Manajemen Bengkel Motor",
    Description:
      "Sistem berbasis web untuk membantu operasional bengkel motor, mulai dari pengelolaan transaksi servis, data pelanggan, data kendaraan, hingga manajemen stok suku cadang secara terintegrasi.",
    Img: "posbengkel.png",
    Link: "https://github.com/Dimsadjw",
    Github: "https://github.com/Dimasadjw",
    TechStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    Features: [
      "Manajemen Data Pelanggan & Kendaraan",
      "Pencatatan Transaksi Servis",
      "Manajemen Stok Suku Cadang",
      "Pengelolaan Data Layanan Servis",
      "Laporan Transaksi & Pendapatan",
    ],
  },
  {
    id: 4,
    Title: "Resep Makanan Apps",
    Description:
      "Aplikasi produktivitas untuk manajemen tugas kuliah dan proyek tim mahasiswa dengan fitur status board, pengingat deadline, dan penyimpanan data lokal.",
    Img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    Link: "https://github.com/dimasadjie",
    Github: "https://github.com/Dimasadjw",
    TechStack: ["React", "Tailwind CSS", "LocalStorage", "Lucide Icons"],
    Features: [
      "Status Board Manajemen Tugas",
      "Manajemen Prioritas & Deadline",
      "Kategori Tag Warna",
      "Penyimpanan Offline LocalStorage",
    ],
  },
];

export const INITIAL_CERTIFICATES = [
  {
    id: 1,
    Title: "Pemrograman Mobile & Front-End Development",
    Img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    Title: "Dasar Pemrograman Web & JavaScript Modern",
    Img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    Title: "UI/UX Design & Digital Entrepreneurship",
    Img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  }
];

