import { size_icon } from "@/constants/Theme";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export type ThemedInputTextProps = {
    placeHolder?: string;
    title?: string;
    status: "valid" | "invalid" | "neutral";
    onChangeText?: (text: string) => void;
    value ?: string;
    secureTextEntry ?: boolean;
};

const ThemedInputText = ({placeHolder = "", title = "", status, value, onChangeText = () => {}, secureTextEntry = false }: ThemedInputTextProps) => {

    const [text, setText] = useState("");

    const [showSecureText, setShowSecureText] = useState(false);

    const borderColor = status === "valid" ? "#0C9409" : status === "invalid" ? "#ED1010" : "#e6e6e6";

    return (
        <View style={styles.textField}>
            <Text style={[styles.text, styles.textTypo]}>{title}</Text>
            <View style={[styles.field, styles.fieldFlexBox, {borderColor: borderColor}]}>
                <View style={[styles.placeholderWrapper, styles.fieldFlexBox]}>
                    <TextInput 
                        style={[styles.placeholder, styles.textTypo]} 
                        placeholder={placeHolder}
                        onChangeText={onChangeText}
                        autoCapitalize="none"
                        secureTextEntry={secureTextEntry && !showSecureText}             
                        value={value}
                    />
                    {status !== "neutral" && <Image 
                        source={status === "valid" ? 
                            require("@/assets/icon/CheckCircle.png") : 
                            require("@/assets/icon/WarningCircle.png")} 
                        style={{width: size_icon, height: size_icon}}
                    />}
                    {secureTextEntry && 
                    <TouchableOpacity onPress={() => setShowSecureText(!showSecureText)}>
                        <Image 
                            source={showSecureText ? 
                                require("@/assets/icon/Eye.png") : 
                                require("@/assets/icon/eye-off.png")}
                            style={{width: size_icon, height: size_icon}}
                        />
                    </TouchableOpacity>}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textTypo: {
        textAlign: "left",
        fontFamily: "General Sans",
        lineHeight: 22,
        fontSize: 16
    },
    fieldFlexBox: {
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        fontWeight: "500",
        color: "#1a1a1a"
    },
    placeholder: {
        color: "#999",
        flex: 1
    },
    placeholderWrapper: {
        justifyContent: "center",
        flex: 1
    },
    field: {
        alignSelf: "stretch",
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#e6e6e6",
        borderWidth: 1,
        height: 52,
        overflow: "hidden",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 14
    },
    textField: {
        width: "100%",
        gap: 4,
    }
});


export default ThemedInputText;
