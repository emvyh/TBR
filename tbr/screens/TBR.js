import React, { useState } from "react";
import {
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../CustomText";
import Book from "../components/Book";

export default function TBR({ navigation }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["e-book", "physical", "romance", "fantasy"];

  return (
    <LinearGradient
      colors={["#ffbe9e", "#fa918b", "#fe7582"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.tbrWrapper}>
        <CustomText style={styles.sectionTitle}>To Be Read</CustomText>

        <TextInput
          style={styles.searchBar}
          placeholder="Search in your library..."
          onChangeText={setSearch}
          value={search}
          placeholderTextColor="#f8e9e9ff"
        />
        <View style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonSelected,
              ]}
              onPress={() =>
                setSelectedCategory((prev) =>
                  prev === category ? null : category
                )
              }
            >
              <CustomText style={styles.categoryText}>{category}</CustomText>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bookRow}>
          <Book text={"task1"} />
          <Book text={"task2"} />
          <Book text={"task3"} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tbrWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
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
  bookRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    color: "#fff",
  },
  categories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // hug the left side
    marginTop: 10,
  },
  categoryButton: {
    marginRight: 12,
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  categoryButtonSelected: {
    marginRight: 12,
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  categoryText: {
    color: "#f8e9e9ff",
    fontWeight: "bold",
  },
});
