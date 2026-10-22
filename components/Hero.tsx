import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component: Hero (bagian utama dengan foto)
// Props: nama, jurusan, deskripsi, foto
type HeroProps = {
  nama: string;
  jurusan: string;
  deskripsi: string;
  foto: any;
};

export default function Hero(props: HeroProps) {
  return (
    <View style={styles.kotak}>
      <Text style={styles.label}>Portofolio Siswa</Text>
      <Text style={styles.nama}>{props.nama}</Text>
      <Text style={styles.jurusan}>{props.jurusan}</Text>
      <Text style={styles.deskripsi}>{props.deskripsi}</Text>

      <View style={styles.areaFoto}>
        <View style={styles.lingkaran} />
        <Image source={props.foto} style={styles.foto} resizeMode="cover" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kotak: {
    backgroundColor: '#efe0d1',
    borderRadius: 30,
    padding: 28,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#8a6a4f',
    letterSpacing: 1,
  },
  nama: {
    fontSize: 38,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: '#4a3426',
    textAlign: 'center',
    marginTop: 10,
  },
  jurusan: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#6f4e37',
    marginTop: 8,
    textAlign: 'center',
  },
  deskripsi: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5b4f',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 14,
  },
  areaFoto: {
    marginTop: 30,
    height: 260,
    width: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lingkaran: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#e0c8b0',
  },
  foto: {
    width: 210,
    height: 210,
    borderRadius: 105,
    borderWidth: 5,
    borderColor: 'white',
  },
});