import Spinner from '@/components/Spinner';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { Chase } from 'react-native-animated-spinkit';


export default function SplashScreen() {

  useEffect(() => {
    setTimeout(() => {
      router.navigate('onboard' as any);
    }, 1000);
  }, []);

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4E0D7'
      }}>
        <ImageBackground
          source={require('@/assets/images/bg-splash.png')}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          
          <Image 
            source={require('@/assets/images/logo.png')} 
            style={{objectFit: 'contain', width: 200, height: 200}} />

          <View style={{position: 'absolute', bottom: 150}}>
            <Chase size={80} color="#000" />      
          </View>

        </ImageBackground>        
    </ThemedView>
  );

}
