import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BookSearch = ({ book }) => {
  if (!book) {
    return null;
  }
  return (
    <View style={styles.item}>
      <Image
        source={{
          width: 75,
          height: 125,
          uri: book.pic || "https://via.placeholder.com/75x125?text=No+Image",
        }}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{book.title} </Text>
        <Text style={styles.text}>
          {Array.isArray(book.author) ? book.author.join(", ") : book.author}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#ffb3e6",
    paddingVertical: 15,
    color: "#333",
    borderWidth: 2,
    borderColor: "#ff99d6",
  },
  text: {
    paddingTop: 5,
    fontSize: 20,
    textAlign: "left",
  },
  textWrapper: {
    paddingHorizontal: 10,
    flexDirection: "column",
  },
});
export default BookSearch;
