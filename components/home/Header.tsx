import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header({title = ""}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Image source={require('@/assets/icon/Bell.png')} style={{width:32, height:32}} />

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 120,
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    letterSpacing: -1.6,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: "General Sans",
    color: "#1a1a1a",
    textAlign: "left"
  }
});