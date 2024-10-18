import Slogan from '@/components/onboarding/Slogan';
import ThemedButton from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, Stack } from 'expo-router';
import { Image, ImageBackground, Text, View } from 'react-native';
import 'react-native-reanimated';

export default function OnBoardScreen() {
  return (
    <ThemedView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <ImageBackground
          source={require('@/assets/images/bg-signin.png')}
          style={{
            width: '100%',
            height: '100%',
            flex: 1, 
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          
          <Slogan style={{position: 'absolute', top: 100}} />

          <Image 
            source={require('@/assets/images/bg-signin-guy.png')} 
            style={{objectFit: 'cover', height:'70%', width: '90%', position: 'absolute', bottom: 0, right:0}} />

        </ImageBackground> 
        <View style={{width: '90%', height: 120, paddingTop: 20, alignItems: "center", borderTopWidth: 1, borderColor: "#e6e6e6",}}>
          <ThemedButton title="Commencer" onPress={() => {router.navigate('signup')}} />
        </View>
    </ThemedView>
  );
}
