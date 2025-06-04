import Header from "@/components/home/Header";
import ProductReview from "@/components/product/Review";
import { ThemedView } from "@/components/ThemedView";
import { padding_horizontal, size_icon } from "@/constants/Theme";
import { Product, ProductRate } from "@/types";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";


export default function ProductDetailScreen() {

    const product = useLocalSearchParams();

    const { t } = useTranslation();

    console.log("ProductDetailScreen", product);

    return (
        <ThemedView style={{flex: 1}}>
            <Header title="Details" notification={true} goback={true} />

            <ScrollView style={{paddingHorizontal: padding_horizontal, flex: 1, gap: 15}}>
                <ImageBackground 
                    source={product.image} style={{width: '100%', height: 400}}
                    imageStyle={{borderRadius: 10}}
                    resizeMode="contain" resizeMode="cover">
                    <TouchableOpacity 
                        style={styles.container_saved}
                        onPress={() => console.log("saved")}>
                        <Image
                            style={{width: size_icon, height: size_icon, backgroundColor: "white"}}
                            source={require("@/assets/icon/Heart.png")}
                        />
                    </TouchableOpacity>
    
                </ImageBackground>

                <Text style={styles.name}>{product.name}</Text>

                <ProductReview rate={product.rate as ProductRate} />

                <Text>{product.description}</Text>
            </ScrollView>

            <View style={styles.container_call_to_action}>
                <View style={{width: "30%", height: "100%", justifyContent: "center",flexDirection: "column", gap: 5}}>
                    <Text style={styles.price_text_title}>Prix</Text>
                    <Text style={[styles.price_text, styles.textTypo]}>{product.price} €</Text>
                </View>
                <TouchableOpacity style={styles.button_container}>
                    <Image
                        style={{width: size_icon, height: size_icon, marginRight: 10}}
                        source={require("@/assets/icon/BagWhite.png")}
                    />
                    <Text style={styles.title_button}>Ajouter au Panier</Text>
                </TouchableOpacity>
            </View>

            
        </ThemedView>
    )
    

};

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "General Sans",
        color: "#1a1a1a",
        textAlign: "left"
    },
    container_saved: {
        position: "absolute", 
        top: 20, 
        right: 20, 
        width: size_icon * 2, 
        height: size_icon * 2, 
        backgroundColor: "white", 
        borderRadius: 10, 
        justifyContent: "center", 
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    container_call_to_action: {
        paddingHorizontal: padding_horizontal, paddingVertical: 10, height: 70, justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 10,
        borderTopWidth: 1, borderColor: "#e6e6e6"
    },
    title_button: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "500",
        fontFamily: "General Sans",
        color: "#fff",
        textAlign: "left"
    },
    button_container: {
        borderRadius: 10,
        backgroundColor: "#1a1a1a",
        flex: 1,
        width: "70%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
    },
    textTypo: {
        textAlign: "left",
        fontFamily: "General Sans"
    },
    price_text: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: "700",
        color: "#1a1a1a",
    },
    price_text_title: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: "General Sans",
        color: "#808080",
        textAlign: "left"
    }   
});
    