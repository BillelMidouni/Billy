import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { View, Text } from 'react-native';

export default function CartScren(){

    return (
        <ThemedView style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
            <Text>Cart</Text>
        </ThemedView>
    )

}