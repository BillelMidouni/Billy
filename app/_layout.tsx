import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { store } from '@/core/store';

import { Provider, useSelector } from 'react-redux'
import { PostHogProvider } from 'posthog-react-native'

import { useColorScheme } from '@/core/hooks/useColorScheme';

import '@/core/i18n/'; // This line imports the i18n configuration
import { login } from '@/core/services/Auth';
import { authSlice } from '@/core/store/auth';
import { UserAuth } from '@/types';
import { ModalProvider } from '@/components/modal/ModalProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const userAuth = store.getState().auth;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    console.log(userAuth);
    if (!userAuth.isAuthenticated && userAuth.user !== null) {
      login(userAuth.user.email, userAuth.user.password).then(() => {
        const user: UserAuth = {
          id: userAuth.user.id,
          email: userAuth.user.email,
          password: userAuth.user.password,
          username: "",
          token: "string",
          role: "string",
          createdAt: "string",
          updatedAt: "string",
        };
        store.dispatch(authSlice.actions.login(user));
        setIsAuthenticated(true);
      });
    };
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <PostHogProvider apiKey="phc_t0Ii535yMZef95Mvs9ocNjmw4jU3032Rm3x3Rta9v32" options={{
      host: "https://eu.i.posthog.com",
     }}>
      <Provider store={store}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <ModalProvider>
            <Stack initialRouteName={"(tabs)"}>
                <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
          </ModalProvider>
        </ThemeProvider>
      </Provider>
    </PostHogProvider>
  );
}
