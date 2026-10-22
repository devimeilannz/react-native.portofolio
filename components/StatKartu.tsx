import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component: StatKartu (kartu angka statistik)
// Props: angka dan label
type StatKartuProps = {
  angka: string;
  label: string;
};

export default function StatKartu(props: StatKartuProps) {
  return (
    <View style={styles.kartu}>
      <Text style={styles.angka}>{props.angka}</Text>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: {
    width: '31%',
    backgroundColor: 'white',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eadfd3',
  },
  angka: {
    fontSize: 28,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: '#6f4e37',
  },
  label: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5b4f',
    marginTop: 2,
    textAlign: 'center',
  },
});