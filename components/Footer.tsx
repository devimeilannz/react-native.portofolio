import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Component: Footer
// Props: nama
type FooterProps = {
  nama: string;
};

export default function Footer(props: FooterProps) {
  return <Text style={styles.teks}>Dibuat oleh {props.nama}</Text>;
}

const styles = StyleSheet.create({
  teks: {
    textAlign: 'center',
    color: '#8a7566',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginVertical: 40,
  },
});