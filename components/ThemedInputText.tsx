import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export type ThemedInputTextProps = {
    placeHolder?: string;
    title?: string;
    status: "valid" | "invalid" | "neutral";
    onChange?: (text: string) => void;
};

const ThemedInputText = ({placeHolder = "", title = "", status, onChange = () => {} }: ThemedInputTextProps) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.textField}>
            <Text style={[styles.text, styles.textTypo]}>{title}</Text>
            <View style={[styles.field, styles.fieldFlexBox]}>
                <View style={[styles.placeholderWrapper, styles.fieldFlexBox]}>
                    <TextInput style={[styles.placeholder, styles.textTypo]} placeholder={placeHolder}/>
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
