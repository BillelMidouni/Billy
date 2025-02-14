import { DeliveryHistory } from "@/core/services/Order";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
  

const OrderStatusModal = ({ orderStatus }: { orderStatus: DeliveryHistory[] }) => {

    return (
        <View style={styles.container}>  
            <View style={styles.statusContainer}>
                <ScrollView>
                    {orderStatus.map((item, index) => (
                        <View key={index} style={styles.statusItem}>
                            <Ionicons
                                name={index === orderStatus.length - 1 ? "ellipse-outline" : "radio-button-on-outline"}
                                size={20}
                                color={index === orderStatus.length - 1 ? "#ccc" : "#000"}
                                style={{zIndex: 1, alignSelf: "flex-start"}}
                            />
                            <View style={styles.statusTextContainer}>
                                <Text style={styles.statusTitle}>{item.status}</Text>
                                <Text style={styles.statusAddress}>{item.address}</Text>
                            </View>

                            { /* draw dashed line between ionicons vertically */}
                            {index !== orderStatus.length - 1 && (
                                <View style={{position: "absolute", 
                                    top: 5, left: 9, width: 1, height: 58, 
                                    borderStyle: 'dashed', 
                                    borderWidth: 1,
                                    borderColor: orderStatus.length - 2 === index ? "#ccc" : "#000",
                                zIndex: 0}} />
                            )}
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.divider} />

                <View style={styles.deliveryContainer}>
                    <Image
                        source={{ uri: "https://avatar.iran.liara.run/public/boy" }}
                        style={styles.deliveryImage}
                    />
                    <View style={styles.deliveryInfo}>
                        <Text style={styles.deliveryName}>Jacob Jones</Text>
                        <Text style={styles.deliveryRole}>Livreur</Text>
                    </View>
                    <TouchableOpacity style={styles.callButton}>
                        <Ionicons name="call" size={24} color="black" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  statusContainer: {
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
    height: 60
  },
  statusTextContainer: {
    marginLeft: 10,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusAddress: {
    fontSize: 14,
    color: "gray",
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  deliveryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  deliveryInfo: {
    flex: 1,
    marginLeft: 10,
  },
  deliveryName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deliveryRole: {
    fontSize: 14,
    color: "gray",
  },
  callButton: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 50,
  },
  divider: {
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    borderTopWidth: 1,
    width: "100%",
    height: 1,
    marginVertical: 10,
  },
});

export default OrderStatusModal;