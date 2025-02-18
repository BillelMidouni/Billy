import Header from "@/components/home/Header";
import { useGlobalModal } from "@/components/modal/ModalProvider";
import { ThemedView } from "@/components/ThemedView";
import { order_completed, order_ongoing } from "@/data/fake_order";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ProductVariant {
    color: string;
    size: string;
    stock: number;
    price: number;
    discountPrice?: number;
    imageUrls: string[];
    sku?: string;
}
  
export interface Product {
    id: string;
    name: string;
    description: string;
    storeId: string;
    category: string;
    brand?: string;
    variants: ProductVariant[];
    ratings: {
        average: number;
        reviewsCount: number;
    };
    tags: string[];
    material: string;
    isFeatured: boolean;
    availability?: boolean;
    createdAt: string;
    updatedAt?: string;
    currency?: string;
}
  
interface Order {
    id: string;
    product: Product;
    status: "In Transit" | "Picked" | "Packing";
}


export default function MyOrdersScreen() {
    const [selectedTab, setSelectedTab] = useState<"Ongoing" | "Completed">("Ongoing");
    const orders = selectedTab === "Ongoing" ? order_ongoing : [];

    return(
        <ThemedView style={{flex: 1}}>
            <Header title="My Orders" goback={true} notification={true} />

            <View style={styles.container}>
                <View style={styles.tabsContainer}>
                    <TouchableOpacity
                        style={[styles.tab, selectedTab === "Ongoing" && styles.activeTab]}
                        onPress={() => setSelectedTab("Ongoing")}
                    >
                        <Text style={[styles.tabText, selectedTab === "Ongoing" && styles.activeTabText]}>Ongoing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, selectedTab === "Completed" && styles.activeTab]}
                        onPress={() => setSelectedTab("Completed")}
                    >
                        <Text style={[styles.tabText, selectedTab === "Completed" && styles.activeTabText]}>Completed</Text>
                    </TouchableOpacity>
                </View>

                {/* Order List */}
                {orders.length === 0 ? (
                    <View style={styles.emptyContainer}>
                    <Ionicons name="cube-outline" size={80} color="#ccc" />
                    <Text style={styles.emptyTitle}>No {selectedTab} Orders!</Text>
                    <Text style={styles.emptySubtitle}>You don’t have any {selectedTab.toLowerCase()} orders at this time.</Text>
                    </View>
                ) : <FlatList
                    style={{flex: 1}}
                    data={orders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <View style={styles.orderCard}>
                        <Image source={{ uri: item.product.variants[0].imageUrls[0] }} style={styles.productImage} />
                        <View style={styles.orderInfo}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <View>
                                    <Text style={styles.productName}>{item.product.name}</Text>
                                    <Text style={styles.productSize}>Size {item.product.variants[0].size}</Text>
                                </View>
                                
                                <View style={styles.statusBadge}>
                                    <Text style={styles.statusText}>{item.status}</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end"}}>

                                <Text style={styles.productPrice}>${item.product.variants[0].price}</Text>

                                <View style={styles.orderFooter}>
                                    <TouchableOpacity 
                                        style={styles.trackButton}
                                        onPress={() => {router.push({ pathname: "/(account)/trackorder", params: { order: item} })}}>
                                        <Text style={styles.trackButtonText}>Track Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    )}
                />}
            </View>
        </ThemedView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
    },
    tabsContainer: {
        flexDirection: "row",
        backgroundColor: "#eee",
        borderRadius: 10,
        padding: 5,
        marginVertical: 15,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: "center",
    },
    activeTab: {
        backgroundColor: "white",
        borderRadius: 10,
    },
    tabText: {
        fontSize: 16,
        color: "gray",
    },
    activeTabText: {
        color: "black",
        fontWeight: "bold",
    },
    orderCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        height: 100,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    orderInfo: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "space-between",
        height: 80
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    productSize: {
        fontSize: 14,
        color: "gray",
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
    },
    orderFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    statusBadge: {
        backgroundColor: "#eee",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 30,
    },
    statusText: {
        fontSize: 12,
        color: "black",
    },
    trackButton: {
        backgroundColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    trackButtonText: {
        color: "white",
        fontSize: 14,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      },
      emptyTitle: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "600",
        fontFamily: "General Sans",
        color: "#1a1a1a",
        textAlign: "center",
        marginTop: 20,
      },
      emptySubtitle: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: "General Sans",
        color: "#808080",
        textAlign: "center",
        marginTop: 5,
      }
});