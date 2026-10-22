import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component: KontakBox (kotak ajakan kerja sama + daftar kontak)
// Props: daftar (isinya data kontak)
type KontakBoxProps = {
  daftar: { id: number; nama: string; isi: string }[];
};

export default function KontakBox(props: KontakBoxProps) {
  return (
    <View style={styles.kotak}>
      <Text style={styles.judul}>Mari Bekerja Sama</Text>
      <Text style={styles.deskripsi}>
        Tertarik berdiskusi atau bekerja sama? Hubungi saya lewat kontak di bawah ini.
      </Text>

      {props.daftar.map((item) => (
        <View key={item.id} style={styles.baris}>
          <Text style={styles.nama}>{item.nama}</Text>
          <Text style={styles.isi}>{item.isi}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  kotak: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#eadfd3',
  },
  judul: {
    fontSize: 26,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: '#4a3426',
    textAlign: 'center',
  },
  deskripsi: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5b4f',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 18,
  },
  baris: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#faf5f0',
    padding: 14,
    borderRadius: 12,
    marginBottom: 8,
  },
  nama: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4a3426',
  },
  isi: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5b4f',
  },
});