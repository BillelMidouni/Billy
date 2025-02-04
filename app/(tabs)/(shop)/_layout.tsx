import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function ShopLayout() {
  return (
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="shopdetail" options={{ headerShown: false }} />
        <Stack.Screen name="productdetail" options={{ headerShown: false }} />
      </Stack>
  );
}
