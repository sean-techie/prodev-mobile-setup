import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Entry Screen - Awesome</Text>

      <Text style={styles.largeText}>
        TYPESCRIPT IS GREAT IF YOU PRACTICE MORE
      </Text>

      <Text style={styles.mediumText}>
        React Native provides you single code base for cross platforms
      </Text>

      <Text style={styles.smallText}>ALX is awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  mediumText: {
    fontSize: 16,
    color: "purple",
    textAlign: "center",
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    color: "blue",
    marginBottom: 5,
  },
});