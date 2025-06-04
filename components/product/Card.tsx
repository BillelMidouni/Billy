import { size_icon } from "@/constants/Theme";
import * as React from "react";
import { useRouter } from 'expo-router';
import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Product } from "@/types";

const ProductCard = () => {

	const router = useRouter();

	const product = {
		id: "1",
		name: "Regular Fit Slogan",
		description: "Test description",
		price: 1190,
		rate: {
			average: 4.5,
			number_review: 3,
			reviews: {
				comments: [
					{
						id: "1",
						name: "John Doe",
						comment: "Great product!",
						rating: 5,
					},
					{
						id: "2",
						name: "Jane Smith",
						comment: "Good quality.",
						rating: 4,
					},
					{
						id: "3",
						name: "Alice Johnson",
						comment: "Not worth the price.",
						rating: 2,
					},
				],
			}
		},
		image: require("@/assets/fake/tshirt_blue.png"),
	}
	
  	return (
		<TouchableOpacity 
			style={styles.productCardHorizontal}
			onPress={() => router.push({
				"pathname": '/(tabs)/(shop)/productdetail',
				"params": product
			})}>
			<View style={[styles.container, styles.containerLayout]}>
					<Image 
						style={[styles.imageIcon, styles.containerLayout]} 
						resizeMode="cover" 
						source={product.image} />
					<TouchableOpacity style={styles.activityHeart}>
						<Image 
							style={styles.heartIcon} 
							resizeMode="cover" 
							source={require("@/assets/icon/Heart.png")}
							/>
					</TouchableOpacity>
			</View>
			<View style={styles.container1}>
					<Text style={[styles.regularFitSlogan, styles.textTypo]}>{product.name}</Text>
					<Text style={[styles.text, styles.textTypo]}>{product.price} €</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
  	containerLayout: {
		height: 174,
		width: 161
  	},
  	textTypo: {
    		textAlign: "left",
    		fontFamily: "General Sans"
  	},
  	imageIcon: {
    		top: 0,
    		left: 0,
    		position: "absolute"
  	},
  	heartIcon: {
    		width: size_icon,
    		height: size_icon,
    		overflow: "hidden"
  	},
  	activityHeart: {
    		top: 12,
    		left: 115,
    		shadowColor: "rgba(82, 82, 82, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 8
    		},
    		shadowRadius: 10,
    		elevation: 10,
    		shadowOpacity: 1,
    		borderRadius: 8,
    		backgroundColor: "#fff",
    		padding: 8,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	container: {
    		borderRadius: 10,
    		backgroundColor: "#e6e6e6",
    		overflow: "hidden"
  	},
  	regularFitSlogan: {
    		fontSize: 16,
    		lineHeight: 22,
    		fontWeight: "600",
    		color: "#1a1a1a"
  	},
  	text: {
    		fontSize: 12,
    		lineHeight: 17,
    		fontWeight: "500",
    		color: "#808080"
  	},
  	container1: {
    	gap: 3,
  	},
  	productCardHorizontal: {
		flex: 1,
    	width: 161,
		gap: 8,
  	}
});

export default ProductCard;
