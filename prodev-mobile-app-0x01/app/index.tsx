import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

/**
 * Root layout component — wraps your entire app.
 * Renders a Stack navigator and provides safe area insets.
 */
export default function RootLayout() {
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

        <!-- Optional: Add future screens here -->
        <!-- <Stack.Screen name="login" options={{ title: "Sign In" }} /> -->
      </Stack>
    </SafeAreaProvider>
  );
}
