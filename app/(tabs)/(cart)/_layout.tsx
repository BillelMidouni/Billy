import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function CartLayout() {
  return (
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  );
}
