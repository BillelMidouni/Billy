import { height_button, size_icon } from "@/constants/Theme";
import * as React from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useGlobalModal } from "@/components/modal/ModalProvider";
import FilterModal from "./modal/FilterModal";
import axios from "axios";

const apiKey = "IeIjvLk3igWzLGA8X5bC3QTUKYDfT5wf"


const SearchBar = () => {  	

	const { openModal } = useGlobalModal();

	const search_toggle = async () => {
		const data = {
			"model": "mistral-small-latest",
    		"messages": [{"role": "user", "content": "Who is the most renowned French painter?"}]
		}

		try {
			axios({
				method: 'post',
				url: 'https://api.mistral.ai/v1/chat/completions',
				headers: {
					'Authorization': `Bearer ${apiKey}`,
					'Content-Type': 'application/json'
				},
				data: data
			  }).then((response) => {
			});

		}catch (error) {
			console.log(error)
		}
	}

  	return (
		<View style={{flexDirection: "row", justifyContent: "space-between"}}>
			<View style={styles.textField}>
      			<View style={[styles.field, styles.fieldFlexBox]}>
        				<View style={[styles.searchParent, styles.fieldFlexBox]}>
							<TouchableOpacity>
          						<Image style={styles.searchIcon} resizeMode="cover" source={require("@/assets/icon/Search.png")} />
							</TouchableOpacity>
          					<TextInput 
								style={styles.placeholder} 
								placeholder="Search for clothes..."
								returnKeyType="search"
								></TextInput>
        				</View>
						<TouchableOpacity
							onPress={search_toggle}>
        					<Image style={styles.searchIcon} resizeMode="cover" source={require("@/assets/icon/Mic.png")} />
						</TouchableOpacity>
      			</View>

    		</View>
			<TouchableOpacity 
				style={styles.buttonFilter} 
				onPress={() => {
					openModal("Filtres", <FilterModal onSearch={() => {}}/>, true);
				}}>
				<Image style={styles.filterIcon} resizeMode="cover" source={require("@/assets/icon/Filter.png")} />
			</TouchableOpacity>
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
		height: height_button,
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
		width: size_icon,
		height: size_icon,
		overflow: "hidden"
	},
	buttonFilter: {
		width: height_button,
		height: height_button,
		borderRadius: 10,
		backgroundColor: "#1a1a1a",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 8
	}
});

export default SearchBar;
