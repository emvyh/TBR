import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../CustomText";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function AddBook({ navigation }) {
  return (
    <LinearGradient
      colors={["#ffbe9e", "#fa918b", "#fe7582"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <CustomText bold style={styles.sectionTitle}>
        Add a New Book
      </CustomText>
      <View style={styles.addWrapper}>
        <CustomText semiBold style={styles.midText}>
          Add a New Book to Your Library
        </CustomText>
        <CustomText style={styles.midTextMini}>
          How would you like to add your book?
        </CustomText>
        <View style={styles.selectWrapper}>
          <TouchableOpacity
            style={styles.customButton2}
            onPress={() => navigation.navigate("BySearch")}
          >
            <Fontisto name="search" size={24} color="#fa918b" />
            <CustomText semiBold style={styles.buttonText2}>
              Search By Title / Author
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate("ByBarcode")}
          >
            <Ionicons name="barcode-outline" size={24} color="#fff" />
            <CustomText semiBold style={styles.buttonText}>
              Scan Barcode
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() =>
              navigation.navigate("BookScreen", {
                book: {
                  title: "Temp Book",
                  author: "Jane Doe",
                  year: "2025",
                  pageCount: 123,
                  isbn: "1234567890",
                  pic: "https://via.placeholder.com/150x200?text=Temp+Book",
                },
              })
            }
          >
            <CustomText semiBold style={styles.buttonText}>
              TEMP
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  sectionTitle: {
    paddingTop: 40,
    paddingHorizontal: 20,
    fontSize: 28,
    color: "#ffffffff",
    textAlign: "center",
  },
  midText: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 32,
    color: "#fff",
    paddingHorizontal: 30,
    letterSpacing: 1,
  },
  midTextMini: {
    textAlign: "center",
    paddingTop: 10,
    color: "#fff",
    letterSpacing: 2,
  },
  selectWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 50,
  },
  customButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    minWidth: "90%",
    borderColor: "#e7c2c2ff",
  },
  customButton2: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    minWidth: "90%",
    borderColor: "#e7c2c2ff",
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  buttonText2: {
    color: "#fa918b",
    fontSize: 20,
    fontWeight: "600",
  },
});
