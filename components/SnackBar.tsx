import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';

import { errorColor, succesColor } from '@/constants/Colors';

export type SnackBarParams = {
    message: string;
    type: "success" | "error" | "warning";
    isVisible: boolean;
}

type SnackBarProps = {
    message: string;
    type: "success" | "error" | "warning";
    duration: number;
    onDismiss?: () => void;
}

export default function SnackBar({message, type, duration, onDismiss}: SnackBarProps) {
    const [isVisible, setIsVisible] = useState(true);

    setTimeout(() => {
        setIsVisible(false);
        onDismiss && onDismiss();
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