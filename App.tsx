import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins/400Regular';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display/700Bold';

// Import data dinamis
import {
  profil,
  daftarStatistik,
  daftarSkill,
  daftarTentang,
  daftarProyek,
  daftarKontak,
} from './data/dataPortfolio';

// Import component
import Hero from './components/Hero';
import StatKartu from './components/StatKartu';
import SectionTitle from './components/SectionTitle';
import KeahlianCard from './components/KeahlianCard';
import TentangSaya from './components/TentangSaya';
import ProjectCard from './components/ProjectCard';
import KontakBox from './components/KontakBox';
import Footer from './components/Footer';

export default function App() {
  // Memuat font dulu sebelum halaman ditampilkan
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.halaman}>
      <View style={styles.isi}>
        <Hero
          nama={profil.nama}
          jurusan={profil.jurusan}
          deskripsi={profil.deskripsi}
          foto={profil.foto}
        />

        {/* Statistik */}
        <View style={styles.baris}>
          {daftarStatistik.map((item) => (
            <StatKartu key={item.id} angka={item.angka} label={item.label} />
          ))}
        </View>

        {/* Keahlian: data dari daftarSkill */}
        <SectionTitle judul="Keahlian Saya" />
        <View style={styles.baris}>
          {daftarSkill.map((item) => (
            <KeahlianCard
              key={item.id}
              ikon={item.ikon}
              judul={item.nama}
              deskripsi={item.deskripsi}
            />
          ))}
        </View>

        {/* Tentang saya */}
        <View style={styles.jarak}>
          <TentangSaya
            nama={profil.nama}
            deskripsi={profil.deskripsi}
            poin={daftarTentang}
          />
        </View>

        {/* Proyek */}
        <SectionTitle judul="Proyek Saya" />
        <View style={styles.baris}>
          {daftarProyek.map((item) => (
            <ProjectCard
              key={item.id}
              judul={item.judul}
              deskripsi={item.deskripsi}
              gambar={item.gambar}
            />
          ))}
        </View>

        {/* Kontak */}
        <View style={styles.jarak}>
          <KontakBox daftar={daftarKontak} />
        </View>

        <Footer nama={profil.nama} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  halaman: {
    flex: 1,
    backgroundColor: '#faf5f0',
  },
  isi: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  baris: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  jarak: {
    marginTop: 40,
  },
});