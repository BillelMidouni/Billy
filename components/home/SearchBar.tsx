import * as React from "react";
import {Image, StyleSheet, Text, TextInput, View} from "react-native";

const SearchBar = () => {
  	
  	return (
		<View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
			<View style={styles.textField}>
      			<View style={[styles.field, styles.fieldFlexBox]}>
        				<View style={[styles.searchParent, styles.fieldFlexBox]}>
          					<Image style={styles.searchIcon} resizeMode="cover" source={require("@/assets/icon/Search.png")} />
          					<TextInput style={styles.placeholder} placeholder="Search for clothes..."></TextInput>
        				</View>
        				<Image style={styles.searchIcon} resizeMode="cover" source={require("@/assets/icon/Mic.png")} />
      			</View>

    		</View>
			<View style={styles.buttonFilter}>
				<Image style={styles.filterIcon} resizeMode="cover" source={require("@/assets/icon/Filter.png")} />
			</View>
		</View>
    );
};

const styles = StyleSheet.create({
  	fieldFlexBox: {
		alignItems: "center",
		flexDirection: "row"
  	},
  	searchIcon: {
		width: 24,
		height: 24,
		overflow: "hidden"
  	},
  	placeholder: {
		fontSize: 16,
		lineHeight: 22,
		fontFamily: "General Sans",
		color: "#999",
		textAlign: "left",
		flex: 1
  	},
  	searchParent: {
		justifyContent: "center",
		gap: 12,
		flex: 1
  	},
  	field: {
		alignSelf: "stretch",
		borderRadius: 10,
		borderStyle: "solid",
		borderColor: "#e6e6e6",
		borderWidth: 1,
		height: 52,
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 14,
		overflow: "hidden"
  	},
  	textField: {
		width: "100%",
		flex: 1
  	},
	filterIcon: {
		width: 24,
		height: 24,
		overflow: "hidden"
	},
	buttonFilter: {
		width: 52,
		height: 52,
		borderRadius: 10,
		backgroundColor: "#1a1a1a",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 8
	}
});

export default SearchBar;
