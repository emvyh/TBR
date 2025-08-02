import React from "react";
import { Button, StyleSheet, Alert, Text, View } from "react-native";
import Book from "../components/Book";

export default function Library({ navigation }) {
  return (
    <View style={styles.container}>
      {/* title section */}
      <View style={styles.tbrWrapper}>
        <Text style={styles.sectionTitle}>Library</Text>
        <Text style={styles.sectionHeading}>Current Reads</Text>
        <Button
          title="Add a Book"
          onPress={() => Alert.alert("Button Pressed")}
        />
        <View style={styles.bookRow}>
          {/*this is where book covers will appear */}
          <Book text={"task1"} />
          <Book text={"task2"} />
          <Book text={"task3"} />
        </View>
        {/* bookRow section */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCB9B2",
    paddingHorizontal: 20,
  },
  tbrWrapper: {},
  sectionHeading: {
    color: "#461220",
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#461220",
    fontSize: 36,
    fontWeight: "bold",
    paddingTop: 80,
  },
  bookRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
