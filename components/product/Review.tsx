import { ThemedView } from "@/components/ThemedView";
import { padding_horizontal, size_icon } from "@/constants/Theme";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import { ProductRate } from "@/types";


export default function ProductReview ({
    rate 
  }: {
    rate: ProductRate
  }) {

    console.log("rate", rate);

    const router = useRouter();
    
    return (
        <View style={{height: 50, backgroundColor: "#123456"}}>
            {/* <Text style={{}}>{rate.number_review}(review)</Text> */}
        </View>
    )

};
