import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function BookScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.textWrapper}>
          <Text style={styles.sectionTitle}>Book Details</Text>
        </View>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("AddBook")}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Image
          source={{
            width: 150,
            height: 200,
            uri: "https://picsum.photos/seed/picsum/200/300",
          }}
        />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}> Book Title</Text>
          <Text style={styles.bookAuthor}> Author</Text>
        </View>
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
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    color: "black",
    fontSize: 54,
    fontWeight: "bold",
  },
  customButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff66c4",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    minWidth: 80,
    height: 48,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  heading: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  title: {
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingTop: 20,
    gap: 10,
  },
});
