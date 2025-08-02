import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Book = (props) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          width: 100,
          height: 150,
          uri: "https://picsum.photos/seed/picsum/200/300",
        }}
      />
      <Text style={styles.text}>This is the title </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    paddingTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});
export default Book;
