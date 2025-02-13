import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { useLocalSearchParams } from "expo-router";

import MapView from 'react-native-maps';

import Header from "@/components/home/Header";
import { ThemedView } from "@/components/ThemedView";
import { useGlobalModal } from "@/components/modal/ModalProvider";
import OrderStatusModal from "@/components/modal/OrderStatusModal";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TrackOrderScreen() {
    const { order } = useLocalSearchParams();
    const { t } = useTranslation();
    const { openModal, closeModal } = useGlobalModal();

    useEffect(() => {
        openModal("Order Status", <OrderStatusModal />, false);
    }, []);
     

    return(
        <ThemedView style={styles.container}>
            <Header title="Track Order" goback={true} notification={true} goBackCallback={() => closeModal()} />
            
            <MapView 
                style={styles.map} 
                region={
                    {   // Default location -> Nice (zoome)
                        latitude: 43.7102,
                        longitude: 7.2620,
                        latitudeDelta: 0.0010,
                        longitudeDelta: 0.010,
                    }
                }
            />

            <TouchableOpacity 
                style={styles.orderStatusButton}
                onPress={() => openModal("Order Status", <OrderStatusModal />, false)}>
                <Text style={styles.orderStatusText}>Order Status</Text>
            </TouchableOpacity>

        </ThemedView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    map: {
        flex: 1,
    },
    orderStatusButton: {
        position: "absolute",
        bottom: 10,
        width: 200,
        backgroundColor: "white",
        height: 50,
        borderRadius: 20,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    orderStatusText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});