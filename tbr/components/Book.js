import { View, Text, Image, StyleSheet } from "react-native";
import CustomText from "../CustomText";

const Book = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            width: 100,
            height: 150,
            uri: "https://fastly.picsum.photos/id/797/200/300.jpg?hmac=9JRjR3IU9I3ol6cF0HvudMsYauIgNcElExNSrGOlwGM",
          }}
          style={styles.image}
        />
      </View>
      <CustomText style={styles.text}>This is the title</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  text: {
    paddingTop: 5,
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});

export default Book;
