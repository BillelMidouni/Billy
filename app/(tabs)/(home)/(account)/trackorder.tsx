import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { useLocalSearchParams } from "expo-router";

import MapView, {Region, Marker} from 'react-native-maps';

import Header from "@/components/home/Header";
import { ThemedView } from "@/components/ThemedView";
import { useGlobalModal } from "@/components/modal/ModalProvider";
import OrderStatusModal from "@/components/modal/OrderStatusModal";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { time_animation } from "@/constants/animation";
import { Ionicons } from "@expo/vector-icons";
import { or } from "@react-native-firebase/firestore";

const orderStatus = [
    { status: "Packing", address: "Zara Polygone Riviera",
      location: { latitude: 43.66422299916823, longitude: 7.127494331843337 }
    },
    { status: "Picked", address: "Polygone Riviera, 119 Avenue des Alpes, 06800 Cagnes-sur-Mer, France",
      location: { latitude: 43.664538454332934, longitude: 7.129214959313593 }
    },
    { status: "In Transit", address: "All. des Tilleuls, 06800 Cagnes-sur-Mer, France",
      location: {latitude: 43.662054456879716, longitude: 7.153019128625284}
    },
    { status: "Delivered", address: "184 avenue vauban, 06700 Saint-Laurent-du-Var, France",
      location: {latitude: 43.665554, longitude: 7.186111}
    },
];

export default function TrackOrderScreen() {
    const { order } = useLocalSearchParams();
    const { t } = useTranslation();
    const { openModal, closeModal } = useGlobalModal();
    const [modalVisible, setModalVisible] = useState(false);

    const refMaps = React.createRef<MapView>();

    const [region, setRegion] = useState<Region>({
        latitude: orderStatus[0].location.latitude,
        longitude: orderStatus[0].location.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    } as Region);

    useEffect(() => {
        // compute the region based on the order status
        // center the map to catch all the markers

        let minLat = orderStatus[0].location.latitude;
        let maxLat = orderStatus[0].location.latitude;
        let minLong = orderStatus[0].location.longitude;
        let maxLong = orderStatus[0].location.longitude;

        orderStatus.forEach(status => {
            minLat = Math.min(minLat, status.location.latitude);
            maxLat = Math.max(maxLat, status.location.latitude);
            minLong = Math.min(minLong, status.location.longitude);
            maxLong = Math.max(maxLong, status.location.longitude);
        });

        const latitude = (minLat + maxLat) / 2;
        const longitude = (minLong + maxLong) / 2;

        const latitudeDelta = maxLat - minLat + 0.011;
        const longitudeDelta = maxLong - minLong + 0.011;

        setRegion({
            "latitude": latitude,
            "longitude": longitude,
            "latitudeDelta": latitudeDelta,
            "longitudeDelta": longitudeDelta,
        });
    }, []);

    useEffect(() => {
        openModal("Order Status", <OrderStatusModal orderStatus={orderStatus} />, false, () => setModalVisible(false));
        setModalVisible(true);
    }, []);

    useEffect(() => {
        refMaps.current?.animateToRegion({
            ...region,
            latitude: region.latitude - (modalVisible ? 0.02 : 0),
            longitude: region.longitude
        }, time_animation);
        
    }, [modalVisible]);
     

    return(
        <ThemedView style={styles.container}>
            <Header title="Track Order" goback={true} notification={true} goBackCallback={() => closeModal()} />
            
            <MapView 
                ref={refMaps}
                style={styles.map} 
                region={region as any}
            >

                {orderStatus.map((status, index) => (
                    <Marker
                        key={index}
                        coordinate={status.location}
                        title={status.status}
                        description={status.address}
                    >
                        <View style={styles.statusContainer}>
                            <View style={[styles.statusSubContainer, {backgroundColor: index == orderStatus.length - 1 ? "#ccc" : "#000"}]}>
                                <Ionicons 
                                    name={index == 0  ? "storefront" : index == orderStatus.length - 1 ? "checkmark" : "bicycle"}
                                    size={24} 
                                    color="white"/>
                            </View>
                        </View>
                            
                    </Marker>
                ))}
                
            </MapView>

            <TouchableOpacity 
                style={styles.orderStatusButton}
                onPress={() => {
                    setModalVisible(true);
                    openModal("Order Status", <OrderStatusModal 
                        orderStatus={orderStatus} />, false, () => setModalVisible(false))
                }}>
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
    statusContainer: {
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#19191940", 
        borderRadius: 30, 
        width: 50, 
        height: 50
    },
    statusSubContainer: {
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#1A1A1A", 
        borderRadius: 20, 
        width: 35, 
        height: 35
    }
});