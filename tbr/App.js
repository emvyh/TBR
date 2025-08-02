import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TBR from "./screens/TBR";
import Library from "./screens/Library";
import AddBook from "./screens/AddBook";
import BySearch from "./screens/BySearch";
import ByBarcode from "./screens/ByBarcode";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("TBR");

  let ScreenComponent;
  if (currentScreen === "TBR") {
    ScreenComponent = <TBR />;
  } else if (currentScreen === "Library") {
    ScreenComponent = <Library />;
  } else if (currentScreen === "AddBook") {
    ScreenComponent = <AddBook navigation={{ navigate: setCurrentScreen }} />;
  } else if (currentScreen === "ByBarcode") {
    ScreenComponent = <ByBarcode navigation={{ navigate: setCurrentScreen }} />;
  } else if (currentScreen === "BySearch") {
    ScreenComponent = <BySearch navigation={{ navigate: setCurrentScreen }} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>{ScreenComponent}</View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen("TBR")}
        >
          <Text style={styles.navText}>📚 TBR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen("Library")}
        >
          <Text style={styles.navText}>📖 Library</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen("AddBook")}
        >
          <Text style={styles.navText}>🧾 Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#eee",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navButton: {
    padding: 10,
  },
  navText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
