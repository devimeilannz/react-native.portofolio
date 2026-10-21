import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component 4: ProjectCard
// Menampilkan satu proyek dalam bentuk kartu
// Props: judul dan deskripsi
type ProjectCardProps = {
  judul: string;
  deskripsi: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <View style={styles.kartu}>
      <Text style={styles.judul}>{props.judul}</Text>
      <Text style={styles.deskripsi}>{props.deskripsi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 14,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: '#c9a66b',
  },
  judul: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4a3426',
  },
  deskripsi: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5b4f',
    marginTop: 6,
    lineHeight: 22,
  },
});