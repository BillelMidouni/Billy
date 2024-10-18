import Header from '@/components/home/Header';
import Slogan from '@/components/onboarding/Slogan';
import ThemedButton from '@/components/ThemedButton';
import ThemedInputText from '@/components/ThemedInputText';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { padding_horizontal } from '@/constants/Theme';
import { Stack } from 'expo-router';
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native';
import 'react-native-reanimated';

export default function SignUpScreen() {
  return (
    <ThemedView style={{flex: 1}}>
      <Header title="Create an account" notification={false} />
      <Text style={styles.letsCreateYour}>Let’s create your account.</Text>

      <View style={{paddingHorizontal: padding_horizontal, flex: 1, gap: 15}}>
        <ThemedInputText title="Full Name" placeHolder="Enter your full name" status="neutral" />
        <ThemedInputText title="Email" placeHolder="Enter your email" status="neutral" />
        <ThemedInputText title="Password" placeHolder="Enter your password" status="neutral" />

        <ThemedButton title="Create an Account" onPress={() => {}} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  createAnAccount: {
    fontSize: 32,
    letterSpacing: -1.6,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: "General Sans",
    color: "#1a1a1a",
    textAlign: "left",
    width: 262
  },
  letsCreateYour: {
    marginHorizontal: padding_horizontal,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "General Sans",
    color: "#808080",
    textAlign: "left",
    width: 264
  }
});