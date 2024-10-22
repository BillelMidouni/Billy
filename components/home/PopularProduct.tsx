import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PopularProductType } from '@/types';


export default function PopularProduct({
    popularProduct,
}:{
    popularProduct: PopularProductType[]
}){

    return (
        <View style={styles.container}>
            <View style={styles.container_title}>
                <Text style={styles.text}>Popular Product</Text>
                <Text> view all </Text>
            </View>

            <View>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});