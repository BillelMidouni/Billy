import React from "react";

import Header from "@/components/home/Header";
import { ThemedView } from "@/components/ThemedView";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";

interface AccountOption {
    title: string;
    icon: string;
    route?: Href<string | object>;
    isLogout?: boolean;
}
  
const accountOptions: AccountOption[] = [
    { title: "My Orders", icon: "cube-outline", route: "myorders" as Href },
    { title: "My Details", icon: "person-outline", route: "mydetails" as Href },
    { title: "Address Book", icon: "home-outline", route: "addresses" as Href },
    { title: "Payment Methods", icon: "card-outline", route: "payments" as Href },
    { title: "Notifications", icon: "notifications-outline", route: "notifications" as Href },
    { title: "FAQs", icon: "help-circle-outline", route: "faqs" as Href },
    { title: "Help Center", icon: "headset-outline", route: "help" as Href },
    { title: "Logout", icon: "log-out-outline", isLogout: true },
];
  

export default function AccountScreen() {

    return (
        <ThemedView style={{flex: 1}}>
            <Header title="Compte" goback={true} notification={true} />
            <View style={styles.container}>
                <FlatList
                    data={accountOptions}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.optionItem, item.isLogout && styles.logoutItem]}
                        onPress={() => { 
                            if (item.isLogout) {
                                router.push("/(onboarding)/login") 
                            } else {
                                item.route && router.push(item.route) 
                            }
                        }}
                        >
                        <View style={styles.optionLeft}>
                            <Ionicons
                                name={item.icon}
                                size={24}
                                color={item.isLogout ? "red" : "black"}
                            />
                            <Text style={[styles.optionText, item.isLogout && styles.logoutText]}>
                                {item.title}
                            </Text>
                            </View>
                        {!item.isLogout && <Ionicons name="chevron-forward" size={24} color="gray" />}
                    </TouchableOpacity>
                    )}
                />
            </View>

        </ThemedView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
    },
    optionItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    optionLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    optionText: {
        fontSize: 16,
        marginLeft: 12,
    },
    logoutItem: {
        marginTop: 20,
    },
    logoutText: {
        color: "red",
        fontWeight: "bold",
    },
});