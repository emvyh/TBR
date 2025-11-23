import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";
import Dropdown from "../components/Dropdown";
import { getQuery } from "../utils/bookFinder";

export default function BookScreen({ route, navigation }) {
  console.log("Route params:", route?.params);
  console.log("Book data:", route?.params?.book);
  const [select, setSelect] = useState(null);
  const [owned, setOwned] = useState(null);
  const [category, setCategory] = useState([]);
  const categories = [
    "ebook",
    "physical",
    "fantasy",
    "romance",
    "ya",
    "self-help",
  ];
  const { book } = route.params;

  //get the latest query
  const query = getQuery();

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>No book data received</Text>
      </View>
    );
  }
  console.log("All book properties:", Object.keys(book));

  return (
    <LinearGradient
      colors={["#ffbe9e", "#fa918b", "#fe7582"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.bookScreenWrapper}>
        <ScrollView style={styles.container}>
          {/* back button */}
          <TouchableOpacity onPress={() => navigation.navigate("BySearch")}>
            <Ionicons name="arrow-back" size={32} color="#fff" />
          </TouchableOpacity>
          <View style={styles.bookHero}>
            <Image
              source={{
                uri: book.pic || "https://picsum.photos/150/200",
              }}
              style={styles.bookImage}
            />

            <View style={styles.titleAuthor}>
              <CustomText bold style={styles.bookTitle}>
                {book.title}
              </CustomText>
              <CustomText style={styles.smallText}>
                {" "}
                By{" "}
                {Array.isArray(book.author)
                  ? book.author.join(", ")
                  : book.author}
              </CustomText>
            </View>
          </View>
          <View style={styles.blockContainer}>
            <View style={styles.block}>
              <CustomText style={styles.smallText}> Publication</CustomText>
              <CustomText style={styles.smallText}>{book.year}</CustomText>
            </View>
            <View style={styles.block}>
              <CustomText style={styles.smallText}>Pages</CustomText>
              <CustomText style={styles.smallText}>
                {" "}
                {book.pageCount}{" "}
              </CustomText>
            </View>
            <View style={styles.block}>
              <CustomText style={styles.smallText}>Publisher</CustomText>
              <CustomText style={styles.smallText}>
                {" "}
                {book.publisher}{" "}
              </CustomText>
            </View>
          </View>

          <CustomText style={styles.questions}>
            Where would you like to add this book?
          </CustomText>
          <View style={styles.select}>
            <TouchableOpacity
              style={[
                styles.selector,
                select === "tbr" && styles.selectorSelected,
              ]}
              onPress={() => setSelect("tbr")}
            >
              <CustomText style={styles.buttonText}>TBR</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.selector,
                select === "library" && styles.selectorSelected,
              ]}
              onPress={() => setSelect("library")}
            >
              <CustomText style={styles.buttonText}>Library</CustomText>
            </TouchableOpacity>
          </View>
          <CustomText style={styles.questions}>Owned?</CustomText>
          <View style={styles.select}>
            <TouchableOpacity
              style={[
                styles.selector,
                owned === "yes" && styles.selectorSelected,
              ]}
              onPress={() => setOwned("yes")}
            >
              <CustomText style={styles.buttonText}>Yes</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.selector,
                owned === "no" && styles.selectorSelected,
              ]}
              onPress={() => setOwned("no")}
            >
              <CustomText style={styles.buttonText}>No</CustomText>
            </TouchableOpacity>
          </View>
          <CustomText style={styles.questions}>Add to a category?</CustomText>
          <Dropdown
            options={categories}
            value={category}
            onSelect={setCategory}
            placeholder="Select a category..."
          />
          <TouchableOpacity style={styles.add} onPress={() => null}>
            <CustomText style={styles.buttonText}>Add Book</CustomText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookScreenWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
  },
  bookHero: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  bookImage: {
    width: 220,
    height: 270,
    backgroundColor: "#fff",
    elevation: 8,
  },
  titleAuthor: {
    alignItems: "center",
  },
  bookTitle: {
    fontSize: 28,
    color: "#fff",
    flexWrap: "wrap",
  },
  smallText: {
    fontSize: 16,
    color: "#fff",
    flexWrap: "wrap",
    marginTop: 5,
  },
  blockContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 10,
  },
  block: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 10,
    alignItems: "center",
  },
  bookDetail: {
    paddingTop: 20,
    gap: 20,
  },
  questions: {
    fontSize: 16,
    color: "#fff",
    paddingTop: 10,
  },
  select: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  selector: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  selectorSelected: {
    backgroundColor: "rgba(252, 72, 117, 0.3)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  last: {
    marginTop: 30,
    marginBottom: 40,
  },
  add: {
    backgroundColor: "#ff66c4",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 100,
  },
});
