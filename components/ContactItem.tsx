import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component 5: ContactItem
// Menampilkan satu baris kontak
// Props: nama dan isi
type ContactItemProps = {
  nama: string;
  isi: string;
};

export default function ContactItem(props: ContactItemProps) {
  return (
    <View style={styles.baris}>
      <Text style={styles.nama}>{props.nama}</Text>
      <Text style={styles.isi}>{props.isi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baris: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eadfd3',
  },
  nama: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4a3426',
  },
  isi: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5b4f',
  },
});