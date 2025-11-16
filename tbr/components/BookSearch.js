import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomText from "../CustomText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const BookSearch = ({ book, onPress }) => {
  if (!book) {
    return null;
  }
  return (
    <View style={styles.bookContainer}>
      <View style={styles.item}>
        <Image
          source={{
            width: 75,
            height: 125,
            uri: book.pic || "https://via.placeholder.com/75x125?text=No+Image",
          }}
          style={styles.image}
        />

        <View style={styles.bookCardandButton}>
          <View style={styles.textWrapper}>
            <CustomText semiBold style={styles.text}>
              {book.title}
            </CustomText>
            <CustomText style={styles.text}>
              {Array.isArray(book.author)
                ? book.author.join(", ")
                : book.author}
            </CustomText>
          </View>

          <TouchableOpacity onPress={onPress} style={styles.addButton}>
            <MaterialIcons name="add-circle" size={32} color="#fc6271ff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    paddingTop: 5,
    fontSize: 16,
    textAlign: "left",
    flexWrap: "wrap",
    width: "80%",
    color: "#f8e9e9ff",
  },
  imageContainer: {
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  bookCardandButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  textWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    flexShrink: 1,
    maxWidth: "80%",
  },

  addButton: {
    padding: 4,
  },
});
export default BookSearch;
