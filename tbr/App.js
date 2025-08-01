import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Alert, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}
const containerStyle = {
  backgroundColor: "pink",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
});
