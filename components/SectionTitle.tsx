import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Component 2: SectionTitle
// Dipakai untuk judul tiap bagian (Skill, Proyek, Kontak)
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
    marginTop: 35,
    marginBottom: 15,
  },
});
