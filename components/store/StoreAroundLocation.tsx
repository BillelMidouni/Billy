import React from "react";

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { Store } from "@/core/services/Store";

export default function StoreAroundLocation({ storeAroundLocation }: { storeAroundLocation: Store[] }) {

    const router = useRouter();

    return (
        <View style={{flex: 1}}>
            <Text style={styles.title}>Boutique à proximiter</Text>
            <FlatList
                style={{flex: 1}}
                data={storeAroundLocation}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{columnGap: 15}}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={{ width: 150, marginBottom: 10, justifyContent: "center", alignItems: "center"}}
                        onPress={() => router.navigate({
                            "pathname": '/(tabs)/(shop)/shopdetail',
                            "params": { store: JSON.stringify(item) }
                        })}>
                        <Image source={{ uri: item.logo_image }} style={{ width: 100, height: 100, borderRadius: 10, marginRight: 5, objectFit: "contain" }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: '#777' }}>{item.rating}</Text>
                            <Image source={require('../../assets/icon/Star.png')} style={{ width: 15, height: 15, marginLeft: 5 }} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "600",
        fontFamily: "General Sans",
        color: "#1a1a1a",
        textAlign: "left"
    }
});
