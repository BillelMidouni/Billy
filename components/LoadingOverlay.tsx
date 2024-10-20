import React from 'react';
import { View } from 'react-native';
import { Chase } from 'react-native-animated-spinkit';


type LoadingOverlayProps = {
    isVisible: boolean;
}

export default function LoadingOverlay({isVisible}: LoadingOverlayProps) {
    return (
        isVisible ? <View style={{flex: 1, width: '100%', height: '100%', justifyContent: "center", alignItems: "center", backgroundColor: '#FFFFFFAA', position: "absolute"}}>
                <Chase size={50} color="#000" />   
        </View> : null
    );
}