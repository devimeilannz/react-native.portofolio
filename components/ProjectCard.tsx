import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component: ProjectCard
// Menampilkan satu proyek dalam bentuk kartu katalog
// Props: judul, deskripsi, dan gambar
type ProjectCardProps = {
  judul: string;
  deskripsi: string;
  gambar: any;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <View style={styles.kartu}>
      {/* Gambar dibungkus View yang tingginya tetap, supaya ukurannya pasti */}
      <View style={styles.bungkusGambar}>
        <Image source={props.gambar} style={styles.gambar} resizeMode="cover" />
      </View>
      <View style={styles.isi}>
        <Text style={styles.judul}>{props.judul}</Text>
        <Text style={styles.deskripsi}>{props.deskripsi}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: {
    width: '31%',
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eadfd3',
  },
  bungkusGambar: {
    width: '100%',
    height: 150,
    backgroundColor: '#efe0d1',
  },
  gambar: {
    width: '100%',
    height: '100%',
  },
  isi: {
    padding: 14,
  },
  judul: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4a3426',
  },
  deskripsi: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5b4f',
    marginTop: 6,
    lineHeight: 20,
  },
});