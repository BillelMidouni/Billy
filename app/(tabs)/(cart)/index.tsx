import Header from '@/components/home/Header';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CartScren(){

    return (
        <View style={styles.container}>
            <Header title="Cart" goback={false} notification={true} />

            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
});