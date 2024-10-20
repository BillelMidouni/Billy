import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function OnBoardingLayout() {
  return (
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboard" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="resetpassword" options={{ headerShown: false }} />
      </Stack>
  );
}
