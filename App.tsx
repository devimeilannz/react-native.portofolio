import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

// Import data dinamis
import { profil, daftarSkill, daftarProyek, daftarKontak } from './data/dataPortfolio';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';

// Import component yang sudah dibuat
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import SkillItem from './components/SkillItem';
import ProjectCard from './components/ProjectCard';
import ContactItem from './components/ContactItem';
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
      {/* Header menerima data profil lewat props */}
      <Header
        nama={profil.nama}
        jurusan={profil.jurusan}
        deskripsi={profil.deskripsi}
        foto={profil.foto}
      />

      <View style={styles.isi}>
        {/* Bagian Skill */}
        <SectionTitle judul="Skill" />
        <View style={styles.barisSkill}>
          {/* map() dipakai untuk menampilkan data satu per satu */}
          {daftarSkill.map((item) => (
            <SkillItem key={item.id} nama={item.nama} />
          ))}
        </View>

        {/* Bagian Proyek */}
        <SectionTitle judul="Proyek" />
        {daftarProyek.map((item) => (
          <ProjectCard
            key={item.id}
            judul={item.judul}
            deskripsi={item.deskripsi}
          />
        ))}

        {/* Bagian Kontak */}
        <SectionTitle judul="Kontak" />
        {daftarKontak.map((item) => (
          <ContactItem key={item.id} nama={item.nama} isi={item.isi} />
        ))}

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
    padding: 24,
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
  },
  barisSkill: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});