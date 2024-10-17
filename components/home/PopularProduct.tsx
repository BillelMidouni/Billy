import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PopularProduct(){

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Popular Product</Text>
            <Text> view all </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});