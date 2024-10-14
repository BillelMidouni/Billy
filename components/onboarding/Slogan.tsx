import * as React from "react";
import {Text, StyleSheet} from "react-native";

const Slogan = ({style = {}}) => {
  	return (
    	<Text style={[styles.defineYourselfIn, {...style}]}>Define yourself in your unique way.</Text>)
    ;
};

const styles = StyleSheet.create({
  	defineYourselfIn: {
        fontSize: 64,
        letterSpacing: -3.2,
        lineHeight: 51,
        fontWeight: "600",
        fontFamily: "General Sans",
        color: "#1a1a1a",
        textAlign: "left",
        width: 324,
        paddingTop: 15
  	}
});

export default Slogan;
