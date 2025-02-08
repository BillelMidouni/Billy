import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

export default function UserHeader() {
  	
  	return (
    		<View style={styles.customer}>
      			<View style={styles.text}>
        				<Text style={styles.helloWelcome}>Hello, Welcome 👋</Text>
        				<Text style={styles.albertStevano}>Billel Midouni</Text>
      			</View>
      			<Image 
                    style={styles.profileIcon} 
                    resizeMode="cover" 
                    source={require("@/assets/images/profile_fake.png")}/>
    		</View>);
};

const styles = StyleSheet.create({
  	helloWelcome: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "EncodeSans-Regular",
        color: "#787676",
        textAlign: "left"
  	},
  	albertStevano: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "700",
        fontFamily: "EncodeSans-Bold",
        color: "#121111",
        textAlign: "left"
  	},
  	text: {
        gap: 4
  	},
  	profileIcon: {
        borderRadius: 100,
        width: 40,
        height: 40,
        overflow: "hidden"
  	},
  	customer: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
  	}
});