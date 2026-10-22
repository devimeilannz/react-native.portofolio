// Ini DATA DINAMIS.
// Semua isi halaman diambil dari sini, jadi kalau mau ganti isi
// tinggal ubah file ini saja, tidak perlu ubah component.

export const profil = {
  nama: 'Devi Meilan Nilna Nazwa',
  jurusan: 'Siswi RPL - SMK Telkom Malang',
  deskripsi: 'Saya sedang belajar membuat aplikasi mobile dengan React Native.',
  foto: require('../assets/foto.jpeg'),
};

export const daftarStatistik = [
  { id: 1, angka: '3', label: 'Proyek' },
  { id: 2, angka: '2', label: 'Tahun Belajar' },
  { id: 3, angka: '6', label: 'Skill' },
];

export const daftarSkill = [
  { id: 1, nama: 'React Native', ikon: '📱', deskripsi: 'Membuat aplikasi mobile.' },
  { id: 2, nama: 'JavaScript', ikon: '🌐', deskripsi: 'Membuat web sederhana.' },
  { id: 3, nama: 'MySQL', ikon: '🗄️', deskripsi: 'Mengelola data dengan database.' },
  { id: 4, nama: 'Laravel', ikon: '⚙️', deskripsi: 'Membuat API dan CRUD.' },
  { id: 5, nama: 'Desain UI', ikon: '🎨', deskripsi: 'Menata tampilan agar rapi.' },
  { id: 6, nama: 'Kerja Tim', ikon: '🤝', deskripsi: 'Mengerjakan proyek bersama.' },
];

export const daftarTentang = [
  'Siswi RPL SMK Telkom Malang',
  'Sedang belajar React Native',
  'Suka mencoba hal baru',
  'Sudah mengerjakan 3 proyek',
];

export const daftarProyek = [
  {
    id: 1,
    judul: 'Meilody Pet Grooming',
    deskripsi: 'Mengembangkan backend aplikasi grooming hewan dengan REST API, mengelola database MySQL, dan deployment online untuk mendukung integrasi data customer, layanan grooming, serta kebutuhan hewan.',
    gambar: require('../assets/proyek1.jpg'),
  },
  {
    id: 2,
    judul: 'PDAM Website',
    deskripsi: 'Mengembangkan antarmuka website PDAM menggunakan Next.js untuk menampilkan info tagihan, pembayaran, dan status layanan customer secara responsif dan terstruktur.',
    gambar: require('../assets/proyek2.webp'),
  },
  {
    id: 3,
    judul: 'Undangan Wisuda Digital',
    deskripsi: 'Membuat website undangan digital interaktif menggunakan HTML, CSS, dan JavaScript yang menyediakan informasi acara serta memudahkan pengguna mengakses detail kegiatan wisuda.',
    gambar: require('../assets/proyek3.jpg'),
  },
];

export const daftarKontak = [
  { id: 1, nama: 'Email', isi: 'Rasenja01@email.com' },
  { id: 2, nama: 'GitHub', isi: 'github.com/devimeilanilnanz' },
  { id: 3, nama: 'Instagram', isi: '@devimeilann._' },
];