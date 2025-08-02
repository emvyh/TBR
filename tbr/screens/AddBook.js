import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AddBook({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.sectionTitle}>Add Books</Text>
        <Text style={styles.sectionHeading}>Happy Reading</Text>
      </View>
      <View style={styles.selectWrapper}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("ByBarcode")}
        >
          <Text style={styles.buttonText}>Add By Barcode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("BySearch")}
        >
          <Text style={styles.buttonText}>Add By Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc2e8",
  },
  textWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionHeading: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "black",
    fontSize: 54,
    fontWeight: "bold",
  },
  selectWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 50,
  },
  customButton: {
    backgroundColor: "#ff66c4",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
});
