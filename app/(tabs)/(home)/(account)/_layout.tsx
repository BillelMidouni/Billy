import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function AccountLayout() {
  return (
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="myorders" options={{ headerShown: false }} />
        <Stack.Screen name="mydetails" options={{ headerShown: false }} />
        <Stack.Screen name="trackorder" options={{ headerShown: false }} />
      </Stack>
  );
}
