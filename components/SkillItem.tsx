import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component 3: SkillItem
// Menampilkan satu skill dalam kotak kecil
// Props: nama
type SkillItemProps = {
  nama: string;
};

export default function SkillItem(props: SkillItemProps) {
  return (
    <View style={styles.kotak}>
      <Text style={styles.teks}>{props.nama}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kotak: {
    backgroundColor: '#efe0d1',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    marginRight: 10,
    marginBottom: 10,
  },
  teks: {
    color: '#4a3426',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});