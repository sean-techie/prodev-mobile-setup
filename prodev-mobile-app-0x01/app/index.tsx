// app/index.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

/**
 * Root layout component for the entire app.
 * Wraps all screens in a Stack Navigator and provides safe area insets.
 * @returns {JSX.Element} The root navigation stack.
 */
export default function RootLayout(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '                                      
          headerTintColor: '#fff',                      // white back/close buttons
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {/* Main tab group — hides header since tabs handle their own nav */}
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false, 
            title: "My App" 
          }} 
        />

        {/* Optional: Add future screens here */}
        <!-- 
        <Stack.Screen name="login" options={{ title: "Sign In" }} /> 
        <Stack.Screen name="settings" options={{ title: "Settings" }} /> 
        -->

      </Stack>
    </SafeAreaProvider>
  );
}
