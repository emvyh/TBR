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
    backgroundColor: "#ffc2e8",
    paddingHorizontal: 20,
  },
  tbrWrapper: {},
  sectionHeading: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "black",
    fontSize: 54,
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
