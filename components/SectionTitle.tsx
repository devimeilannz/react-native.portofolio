import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Component: SectionTitle
// Dipakai untuk judul tiap bagian (Keahlian, Proyek, dan lainnya)
// Props: judul
type SectionTitleProps = {
  judul: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return <Text style={styles.judul}>{props.judul}</Text>;
}

const styles = StyleSheet.create({
  judul: {
    fontSize: 26,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: '#4a3426',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 5,
  },
});