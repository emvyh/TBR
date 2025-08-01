import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Alert, Text, View } from "react-native";
import Book from "./components/Book";
export default function App() {
  return (
    <View style={styles.container}>
      {/* title section */}
      <View style-={styles.tbrWrapper}>
        <Text style={styles.sectionTitle}>TBR</Text>

        <View style={styles.item}>
          {/*this is where book covers will appear */}
          <Book text={"task1"} />
          <Book text={"task2"} />
          <Book text={"task3"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCB9B2",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  tbrWrapper: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {},
});
