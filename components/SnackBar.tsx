import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

import { errorColor, succesColor } from '@/constants/Colors';

type SnackBarProps = {
    message: string;
    type: "success" | "error" | "warning";
    duration: number;
}

export default function SnackBar({message, type, duration}: SnackBarProps) {
    const [isVisible, setIsVisible] = useState(true);

    setTimeout(() => {
        setIsVisible(false);
    }, duration);

    return (
        isVisible ? <ThemedView style={[styles.container, {
            backgroundColor: type === "success" ? succesColor : type === "error" ? errorColor : "#FFC"
        }]}>
            <Text style={styles.message}>{message}</Text>
        </ThemedView> : null
    );
    
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 35,
        left: 0,
        right: 0,
        padding: 20,
        borderRadius: 10,
        width: '90%',
        marginHorizontal: '5%'
    },
    message: {
        color: 'white',
    }
});