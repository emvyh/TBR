import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const BookSearch = ({ book, onPress }) => {
  if (!book) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={onPress}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: "#ffb3e6",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  item: {
    flexDirection: "row",
  },
  text: {
    paddingTop: 5,
    fontSize: 20,
    textAlign: "left",
    flexWrap: "wrap",
  },
  textWrapper: {
    paddingHorizontal: 10,
    flexDirection: "column",
  },
});
export default BookSearch;
