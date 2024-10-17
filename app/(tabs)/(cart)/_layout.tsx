import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function HomeLayout() {
  return (
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="notification" options={{ headerShown: false }} />
      </Stack>
  );
}
