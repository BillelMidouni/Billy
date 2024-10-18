import Slogan from '@/components/onboarding/Slogan';
import ThemedButton from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated';

export default function OnBoardScreen() {

    const { t } = useTranslation();

    return (
        <ThemedView style={styles.container}>
            <ImageBackground
                source={require('@/assets/images/bg-signin.png')}
                style={styles.bgimage}>
            
            <Slogan style={{position: 'absolute', top: 100}} />

            <Image 
                    source={require('@/assets/images/bg-signin-guy.png')} 
                    style={styles.imageguy} />

            </ImageBackground> 
            <View style={styles.footer}>
                <ThemedButton title={t("onbording.start")} onPress={() => {router.navigate('signup')}} />
            </View>
        </ThemedView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    slogan: {
        position: 'absolute',
        top: 100
    },
    bgimage: {
        width: '100%',
        height: '100%',
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageguy: {
        objectFit: 'cover', 
        height:'80%', 
        width: '90%', 
        position: 'absolute', 
        bottom: 0, 
        right:0
    },
    footer: {
        width: '90%', 
        height: 120, 
        paddingTop: 20, 
        alignItems: "center", 
        borderTopWidth: 1, 
        borderColor: "#e6e6e6",
    }
});