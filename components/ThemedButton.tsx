import * as React from "react";
import {Text, StyleSheet, Image, View, TouchableOpacity} from "react-native";

type ThemedButtonProps = {
	title?: string;
	onPress?: () => void;
	disable?: boolean;
	color?: string;
	containerStyle?: object;
	textStyles?: object;
	leftIcon?: React.ReactNode;
};



const ThemedButton = ({title, onPress, disable, color="#000", containerStyle, textStyles, leftIcon = <></>}: ThemedButtonProps) => {
  	
  	return (
        <TouchableOpacity 
			disabled={disable} 
			style={[styles.button, {backgroundColor: disable ? "#CCCCCC" : color}, containerStyle]} 
			onPress={onPress}>
			{leftIcon}
            <Text style={[styles.button1, textStyles]}>{title}</Text>
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
  	button: {
		borderRadius: 10,
		width: "100%",
		height: 54,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		gap: 10,
		overflow: "hidden"
  	}
});

export default ThemedButton;
