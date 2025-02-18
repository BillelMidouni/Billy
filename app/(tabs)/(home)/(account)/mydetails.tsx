import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CountryFlag from "react-native-country-flag";
import { useLocalSearchParams } from "expo-router";
import Header from "@/components/home/Header";
import { ThemedView } from "@/components/ThemedView";

import DateTimePicker from "@react-native-community/datetimepicker";
import { size_icon, size_icon_small } from "@/constants/Theme";



export default function MyDetailsScreen() {

    const { userinfo } = useLocalSearchParams();
    const [fullName, setFullName] = useState("Cody Fisher");
    const [email, setEmail] = useState("cody.fisher45@example.com");
    const [dateOfBirth, setDateOfBirth] = useState(new Date("1990-07-12"));
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [gender, setGender] = useState("Male");
    const [showGenderPicker, setShowGenderPicker] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("+1 234 453 231 506");

    return(
        <ThemedView style={{flex: 1}}>
            <Header title="Mes informations" goback={true} notification={true} />


            <View style={styles.container}>
                {/* Form */}
                <Text style={styles.label}>Full Name</Text>
                <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />

                <Text style={styles.label}>Email Address</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
                
                <Text style={styles.label}>Date of Birth</Text>
                <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(!showDatePicker)}>
                    <Text>{dateOfBirth.toLocaleDateString()}</Text>
                    <Ionicons name="calendar-outline" size={20} color="gray" style={styles.icon} />
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={dateOfBirth}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setShowDatePicker(false);
                            if (selectedDate) setDateOfBirth(selectedDate);
                        }}
                    />
                )}

                <Text style={styles.label}>Gender</Text>
                <TouchableOpacity 
                    style={styles.input}
                    onPress={() => setShowGenderPicker(!showGenderPicker)}>
                    <Text>{gender}</Text>
                    <Image source={require("@/assets/icon/Chevron.png")} style={styles.icon} />
                </TouchableOpacity>
                {showGenderPicker && (
                    <View>
                        <FlatList 
                            style={styles.pickerContainer}
                            data={["male"]}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <Text>{item}</Text>
                            )}
                        />
                    </View>
                )}   
                
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.input}>
                    <TouchableOpacity style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 55}}>
                        <CountryFlag 
                            isoCode="fr" 
                            size={size_icon_small} 
                            style={{borderRadius: 30, marginRight: 10, width: size_icon_small, height: size_icon_small}} />
                        <Image source={require("@/assets/icon/Chevron.png")} style={[styles.icon, {width: 20, height: 20}]} />
                    </TouchableOpacity>
                    <TextInput value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />
                </View>

            </View>
            
        </ThemedView>
    );
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 15,
    },
    input: {
        borderColor: "#e6e6e6",
        borderWidth: 1,
        padding: 15,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    pickerContainer: {
        borderColor: "#e6e6e6",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 5,
    },
    icon: {
        position: "absolute",
        right: 10,
        width: size_icon_small,
        height: size_icon_small,
    },

});