import React, { useState } from "react";
import { useFonts } from "expo-font";
import CustomText from "./CustomText";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import TBR from "./screens/TBR";
import Library from "./screens/Library";
import AddBook from "./screens/AddBook";
import BySearch from "./screens/BySearch";
import ByBarcode from "./screens/ByBarcode";
import BookScreen from "./screens/BookScreen";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("TBR");
  const [screenParams, setScreenParams] = useState({});

  let [fontsLoaded] = useFonts({
    "StackSansHeadline-Bold": require("./assets/fonts/StackSansHeadline-Bold.ttf"),
    "StackSansHeadline-Regular": require("./assets/fonts/StackSansHeadline-Regular.ttf"),
    "StackSansHeadline-SemiBold": require("./assets/fonts/StackSansHeadline-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigate = (screenName, params = {}) => {
    console.log("Navigate called with:", screenName, params);
    setCurrentScreen(screenName);
    setScreenParams(params);
  };

  let ScreenComponent;
  if (currentScreen === "TBR") {
    ScreenComponent = <TBR navigation={{ navigate }} />;
  } else if (currentScreen === "Library") {
    ScreenComponent = <Library navigation={{ navigate }} />;
  } else if (currentScreen === "AddBook") {
    ScreenComponent = <AddBook navigation={{ navigate }} />;
  } else if (currentScreen === "ByBarcode") {
    ScreenComponent = <ByBarcode navigation={{ navigate }} />;
  } else if (currentScreen === "BySearch") {
    ScreenComponent = <BySearch navigation={{ navigate }} />;
  } else if (currentScreen === "BookScreen") {
    ScreenComponent = (
      <BookScreen navigation={{ navigate }} route={{ params: screenParams }} />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>{ScreenComponent}</View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen("TBR")}
        >
          <Feather style={styles.icon} name="bookmark" size={24} color="#fff" />
          <CustomText style={styles.navText}>TBR</CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen("Library")}
        >
          <Feather
            style={styles.icon}
            name="book-open"
            size={24}
            color="#fff"
          />
          <CustomText style={styles.navText}>Library</CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen("AddBook")}
        >
          <Ionicons
            style={styles.icon}
            name="add-circle-outline"
            size={24}
            color="#fff"
          />
          <CustomText style={styles.navText}>Add</CustomText>
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
    backgroundColor: "#fc6271ff",
    borderTopWidth: 1,
    borderColor: "#ff828eff",
  },
  navButton: {
    padding: 10,
  },
  navText: {
    fontSize: 20,
    color: "#fff",
  },
  icon: {
    textAlign: "center",
    paddingBottom: 5,
  },
});
