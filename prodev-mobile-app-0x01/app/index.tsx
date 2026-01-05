import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Entry Screen - Awesome</Text>
      <Text style={styles.mediumText}>Welcome to your first app!</Text>
      <Text style={styles.smallText}>Start building your app here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  mediumText: {
    fontSize: 24,
    color: 'gray',
  },
  smallText: {
    fontSize: 16,
    color: 'darkgray',
  },
});