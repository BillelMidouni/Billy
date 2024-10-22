import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { PostHogProvider } from 'posthog-react-native'

import { useColorScheme } from '@/core/hooks/useColorScheme';

import { useAuth } from '@/core/hooks/useAuth';

import '@/core/i18n/'; // This line imports the i18n configuration

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { isAuthenticated, user, initializing } = useAuth();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PostHogProvider apiKey="phc_t0Ii535yMZef95Mvs9ocNjmw4jU3032Rm3x3Rta9v32" options={{
      host: "https://eu.i.posthog.com",
     }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack initialRouteName={initializing ? '(onboarding)' : isAuthenticated ? '(tabs)' : 'Auth'}>
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
      </ThemeProvider>
    </PostHogProvider>
  );
}
