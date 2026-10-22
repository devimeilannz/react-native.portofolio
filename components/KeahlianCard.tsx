import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component: KeahlianCard (kartu keahlian dengan ikon emoji)
// Props: ikon, judul, deskripsi
type KeahlianCardProps = {
  ikon: string;
  judul: string;
  deskripsi: string;
};

export default function KeahlianCard(props: KeahlianCardProps) {
  return (
    <View style={styles.kartu}>
      <Text style={styles.ikon}>{props.ikon}</Text>
      <Text style={styles.judul}>{props.judul}</Text>
      <Text style={styles.deskripsi}>{props.deskripsi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eadfd3',
  },
  ikon: {
    fontSize: 32,
  },
  judul: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4a3426',
    marginTop: 10,
  },
  deskripsi: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5b4f',
    marginTop: 4,
    lineHeight: 20,
  },
});