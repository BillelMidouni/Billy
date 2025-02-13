import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";

import ThemedButton from "../ThemedButton";



interface FilterModalProps {
  onSearch: () => void;
  onClose?: () => void;
}


const sortOptions = ["Relevance", "Price: Low - High", "Price: High - Low"];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const FilterModal: React.FC<FilterModalProps> = ({ onSearch, onClose = () => {}}) => {
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const [priceRange, setPriceRange] = useState(19);
  const [selectedSize, setSelectedSize] = useState("L");

  const [showSizeSelector, setShowSizeSelector] = useState(false);

  return (
    <View style={styles.container}>  
      {/* Sort By */}
      <Text style={styles.sectionTitle}>Sort By</Text>
      
      <FlatList
        style={{ height: 40}}
        data={sortOptions}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.sortButton,
              selectedSort === item && styles.selectedSortButton,
            ]}
            onPress={() => setSelectedSort(item)}
          >
            <Text
              style={[
                styles.sortButtonText,
                selectedSort === item && styles.selectedSortButtonText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.divider} />
      
      {/* Price Range*/}
      <Text style={styles.sectionTitle}>Price</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          minimumTrackTintColor="black"
          maximumTrackTintColor="#ccc"
          thumbTintColor="black"
        />
        <Text style={styles.priceText}>$0 - ${priceRange}</Text>
      </View>

      <View style={styles.divider} />
      
      {/* Size Selector */}
      
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <Text style={styles.sectionTitle}>Size</Text>
          {!showSizeSelector ? <TouchableOpacity 
              style={styles.sizeSelector}
              onPress={() => setShowSizeSelector(true)}>
              <Text style={styles.sizeText}>{selectedSize}</Text>
              <Ionicons name="chevron-down" size={20} color="black" />
            </TouchableOpacity>
            :
            <FlatList
              style={{height: 40}}
              data={sizes}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={[styles.sizeSelector, {
                    borderWidth: 1, borderRadius: 10, borderColor: "#ccc", width: 40, paddingHorizontal: 0, marginHorizontal: 10}]}
                  onPress={() => {
                    setSelectedSize(item);
                    setShowSizeSelector(false);
                  }}>
                  <Text style={styles.sizeText}>{item}</Text>
                </TouchableOpacity>
              )}/>
          }
        </View> 
      
      {/* Apply Filters Button */}
      <ThemedButton title="Apply Filters" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sortButton: {
    justifyContent: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  selectedSortButton: {
    backgroundColor: "black",
  },
  sortButtonText: {
    fontSize: 14,
  },
  selectedSortButtonText: {
    color: "white",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 14,
    color: "gray",
  },
  sizeSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 40,
    paddingHorizontal: 15,
    width: 70,
  },
  sizeText: {
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    borderTopWidth: 1,
    width: "100%",
    height: 1,
    marginVertical: 20,
  },
});

export default FilterModal;
