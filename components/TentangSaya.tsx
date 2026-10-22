import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component: TentangSaya (kotak coklat berisi deskripsi dan poin)
// Props: nama, deskripsi, poin
type TentangSayaProps = {
  nama: string;
  deskripsi: string;
  poin: string[];
};

export default function TentangSaya(props: TentangSayaProps) {
  return (
    <View style={styles.kotak}>
      <Text style={styles.label}>Kenalan dulu</Text>
      <Text style={styles.judul}>Halo, saya {props.nama}!</Text>
      <Text style={styles.deskripsi}>{props.deskripsi}</Text>

      {/* map() dipakai untuk menampilkan poin satu per satu */}
      {props.poin.map((item, index) => (
        <Text key={index} style={styles.poin}>
          ✓ {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  kotak: {
    backgroundColor: '#6f4e37',
    borderRadius: 28,
    padding: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#e7d3c0',
  },
  judul: {
    fontSize: 26,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
  },
  deskripsi: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: 'white',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 14,
  },
  poin: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#f5e6d3',
    marginTop: 6,
  },
});