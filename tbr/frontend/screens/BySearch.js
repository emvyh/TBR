import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getbookData } from "../utils/bookFinder";
import BookSearch from "../components/BookSearch";
import CustomText from "../CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BySearch({ navigation }) {
  const [text, setText] = React.useState("");
  const [books, setBooks] = React.useState([]);

  const handleSearch = async () => {

    if (text.trim()) {
      try {
        const searchRes = await getbookData(text);
        setBooks(searchRes);
      } catch (error) {
        console.error("Search failed:", error);
      }
    }
  };
  
  return (
    <LinearGradient
      colors={["#ffbe9e", "#fa918b", "#fe7582"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.searchWrapper}>
        <View style={styles.titleBack}>
          <TouchableOpacity onPress={() => navigation.navigate("AddBook")}>
            <Ionicons name="arrow-back" size={32} color="#fff" />
          </TouchableOpacity>
          <CustomText bold style={styles.sectionTitle}>
            By Search
          </CustomText>
        </View>

        <View>
          <TextInput
            style={styles.searchBar}
            onChangeText={setText}
            value={text}
            placeholder="Search for books..."
            placeholderTextColor="#f8e9e9ff"
            onSubmitEditing={handleSearch}
            returnKeyType="search"
            selectionColor="#fff"
          />
        </View>
        <View style={styles.book}>
          <BookSearch />
        </View>
        {books.length > 0 && (
          <ScrollView style={styles.resultWrapper}>
            <CustomText style={styles.resultHeading}>
              Found {books.length} books:
            </CustomText>
            {books.map((book, index) => (
              <BookSearch
                key={index}
                book={book}
                navigation={navigation}
                onPress={() => {
                  console.log("Book object being passed:", book);
                  console.log("Book keys:", Object.keys(book));
                  navigation.navigate("BookScreen", { book });
                }}
              />
            ))}
          </ScrollView>
        )}
        {books.length === 0 && text.trim() !== "" && (
          <View style={styles.noResults}>
            <CustomText style={styles.noResultsText}>
              No books found. Try a different search term.
            </CustomText>
          </View>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  titleBack: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  sectionTitle: {
    fontSize: 28,
    marginBottom: 20,
    color: "#ffffffff",
    textAlign: "center",
  },
  searchBar: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: 15,
    borderRadius: 15,
    fontSize: 16,
    color: "#fff",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  book: {
    paddingTop: 20,
  },
  resultHeading: {
    color: "#fff",
  },
  noResultsText: {
    textAlign: "center",
    paddingTop: 10,
    color: "#fff",
    fontSize: 16,
  },
});
