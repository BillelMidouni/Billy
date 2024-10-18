import { padding_horizontal, size_icon } from '@/constants/Theme';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({title = "", notification = true, goback = false}) {
  return (
    <View style={styles.header}>
      {goback && (
        <TouchableOpacity
          style={{width: size_icon, height: size_icon}}
          onPress={() => {router.back()}}
        >
          <Image 
            source={require('@/assets/icon/Arrow.png')} 
            style={{width:size_icon, height:size_icon}}   
          />
        </TouchableOpacity>
      )
      }
      <Text style={styles.title}>{title}</Text>
      {notification && (<TouchableOpacity
        style={{width: size_icon, height: size_icon}}
        onPress={() => {router.push('notification')}}
        >
        <Image 
          source={require('@/assets/icon/Bell.png')} 
          style={{width:size_icon, height:size_icon}} 
          />
      </TouchableOpacity>)}
     
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 120,
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: padding_horizontal,
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