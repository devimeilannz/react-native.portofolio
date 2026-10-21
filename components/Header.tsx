import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component 1: Header
// Component ini menerima 3 props: nama, jurusan, dan deskripsi
type HeaderProps = {
  nama: string;
  jurusan: string;
  deskripsi: string;
  foto: any
};

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image source={props.foto} style={styles.foto} />
      <Text style={styles.nama}>{props.nama}</Text>
      <Text style={styles.jurusan}>{props.jurusan}</Text>
      <Text style={styles.deskripsi}>{props.deskripsi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4a3426',
    paddingTop: 70,
    paddingBottom: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#c9a66b',
    marginBottom: 20,
  },
  nama: {
    fontSize: 34,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: 'white',
    textAlign: 'center',
  },
  jurusan: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#e7d3c0',
    marginTop: 8,
    letterSpacing: 1,
  },
  deskripsi: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: 'white',
    marginTop: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});