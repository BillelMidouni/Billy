import * as React from "react";
import {Text, StyleSheet, Image, View, TouchableOpacity} from "react-native";

const ThemedButton = ({title = "", onPress = () => {}}) => {
  	
  	return (
        <TouchableOpacity style={styles.button} onPress={() => {onPress()}}>
            <Text style={styles.button1}>{title}</Text>
            {/* <Image style={styles.arrowRightIcon} resizeMode="cover" source="arrow-right.png" /> */}
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
  	button1: {
		fontSize: 16,
		lineHeight: 22,
		fontWeight: "500",
		fontFamily: "General Sans",
		color: "#fff",
		textAlign: "left"
  	},
  	arrowRightIcon: {
		width: 24,
		height: 24,
		overflow: "hidden"
  	},
  	button: {
		borderRadius: 10,
		backgroundColor: "#1a1a1a",
		width: "90%",
		height: 54,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 84,
		paddingVertical: 16,
		gap: 10,
		overflow: "hidden"
  	}
});

export default ThemedButton;
