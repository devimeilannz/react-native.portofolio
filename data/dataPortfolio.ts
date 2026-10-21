// Ini DATA DINAMIS.
// Semua isi halaman diambil dari sini, jadi kalau mau ganti isi
// tinggal ubah file ini saja, tidak perlu ubah component.

export const profil = {
  nama: 'Devi Meilan Nilna Nazwa',
  jurusan: 'Siswi RPL - SMK Telkom Malang',
  deskripsi: 'Saya sedang belajar membuat aplikasi mobile dengan React Native.',
  foto: require('../assets/foto.jpeg'),
};

export const daftarSkill = [
  { id: 1, nama: 'React Native' },
  { id: 2, nama: 'JavaScript' },
  { id: 3, nama: 'Laravel' },
  { id: 4, nama: 'MySQL' },
];

export const daftarProyek = [
  {
    id: 1,
    judul: 'Database Perpustakaan',
    deskripsi: 'Data buku perpustakaan dibuat dengan Laravel.',
  },
  {
    id: 2,
    judul: 'Wayfinding Sekolah',
    deskripsi: 'Peta sekolah berbasis web yang dibuka lewat QR code.',
  },
  {
    id: 3,
    judul: 'Aplikasi Catatan',
    deskripsi: 'Aplikasi untuk mencatat tugas harian.',
  },
];

export const daftarKontak = [
  { id: 1, nama: 'Email', isi: 'nama@email.com' },
  { id: 2, nama: 'GitHub', isi: 'github.com/namakamu' },
  { id: 3, nama: 'Instagram', isi: '@namakamu' },
];
