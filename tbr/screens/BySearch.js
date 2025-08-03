import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function BySearch({ navigation }) {
  const [text, setText] = React.useState("");

  const handleSearch = () => {
    if (text.trim()) {
      console.log("Searching for:", text);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.textWrapper}>
          <Text style={styles.sectionTitle}>Search</Text>
        </View>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("AddBook")}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Search for books..."
          placeholderTextColor="#cc66a3"
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
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
  heading: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
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
  input: {
    marginLeft: 5,
    backgroundColor: "#ffb3e6",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#333",
    borderWidth: 2,
    borderColor: "#ff99d6",
    maxWidth: 400,
  },
});
