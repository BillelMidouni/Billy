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

interface FilterModalProps {
  onClose: () => void;
}

const sortOptions = ["Relevance", "Price: Low - High", "Price: High - Low"];

const FilterModal: React.FC<FilterModalProps> = ({ onClose }) => {
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const [priceRange, setPriceRange] = useState(19);
  const [selectedSize, setSelectedSize] = useState("L");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      {/* Sort By */}
      <Text style={styles.sectionTitle}>Sort By</Text>
      <FlatList
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
      
      {/* Price Range */}
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
      
      {/* Size Selector */}
      <Text style={styles.sectionTitle}>Size</Text>
      <TouchableOpacity style={styles.sizeSelector}>
        <Text style={styles.sizeText}>{selectedSize}</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>
      
      {/* Apply Filters Button */}
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sortButton: {
    paddingVertical: 10,
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
    marginBottom: 20,
  },
  priceText: {
    fontSize: 14,
    color: "gray",
  },
  sizeSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
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
});

export default FilterModal;
