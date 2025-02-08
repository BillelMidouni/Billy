import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/home/Header";
import SearchBar from "@/components/SearchBar";

export default function SearchScren(){

    const [recentSearches, setRecentSearches] = useState([
        "Jeans",
        "Casual clothes",
        "Hoodie",
        "Nike shoes black",
        "V-neck tshirt",
        "Winter clothes"
    ]);

    const clearAllSearches = () => {
        setRecentSearches([]);
    };

    const removeSearchItem = (item: any) => {
        setRecentSearches(recentSearches.filter(search => search !== item));
    };

    return (
        <View style={styles.container}>
          <Header title="Search" goback={false} notification={true} />
          
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{paddingBottom: 30}}>
                <SearchBar />
            </View>
            
            {/* Recent Searches */}
            <View style={styles.recentSearchesContainer}>
                <Text style={styles.recentTitle}>Recent Searches</Text>
                {recentSearches.length > 0 && (
                <TouchableOpacity onPress={clearAllSearches}>
                    <Text style={styles.clearAllText}>Clear all</Text>
                </TouchableOpacity>
                )}
            </View>
            
            <FlatList
                data={recentSearches}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <View style={styles.searchItemContainer}>
                    <Text style={styles.searchItemText}>{item}</Text>
                    <TouchableOpacity onPress={() => removeSearchItem(item)}>
                    <Ionicons name="close-outline" size={24} color="#aaa" />
                    </TouchableOpacity>
                </View>
                )}
            />
          </View>
        </View>
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 18,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd"
    },
    backIcon: {
      marginRight: 15
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      flex: 1
    },
    searchBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 15
    },
    searchIcon: {
      marginRight: 10
    },
    searchInput: {
      flex: 1,
      fontSize: 16
    },
    micIcon: {
      marginLeft: 10
    },
    recentSearchesContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    },
    recentTitle: {
      fontSize: 18,
      fontWeight: "bold"
    },
    clearAllText: {
      fontSize: 14,
      textDecorationLine: "underline"
    },
    searchItemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd"
    },
    searchItemText: {
      fontSize: 16
    },
    filterContainer: { 
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: 300,
      flexDirection: "row", 
      justifyContent: "space-between", 
      alignItems: "center", 
      paddingVertical: 12, 
      borderRadius: 20,
      backgroundColor: "#f5f5f5"
    },
});  