import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Book = (props) => {
  return (
    <View style={styles.item}>
      <Text>{props.text}</Text>
      <Image
        source={{
          width: 100,
          height: 150,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Book;
