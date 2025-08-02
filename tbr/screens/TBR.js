import React from "react";
import { Button, StyleSheet, Alert, Text, View } from "react-native";
import Book from "../components/Book";

export default function TBR({ navigation }) {
  return (
    <View style={styles.container}>
      {/* title section */}
      <View style={styles.tbrWrapper}>
        <Text style={styles.sectionTitle}>TBR</Text>
        <Text style={styles.sectionHeading}>To Be Read</Text>
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
        <Button
          title="Go to Library"
          onPress={() => navigation.navigate("Library")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9F86C0",
    paddingHorizontal: 20,
  },
  tbrWrapper: {},
  sectionHeading: {
    color: "#231942",
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#231942",
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
