import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Camera } from "expo-camera";

export default function ByBarcode({ navigation }) {
  const [perms, setPerms] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPerms(status === "granted");
    };

    getCameraPermissions();
  }, []);

  //handles the scanning and also times out if too long
  const handleBarcodeScan = ({ type, data }) => {
    setScanned(true);
    // this is where we search api
    console.log("Scanned barcode: ", data);

    setTimeout(() => setScanned(false), 2000);
  };

  const requestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPerms(status === "granted");
  };

  if (perms === null) {
    return <View />;
  }

  if (perms === false) {
    return (
      <View style={styles.container}>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>
            We need your permission to show the camera
          </Text>
          <Button onPress={requestPermission} title="Grant permission" />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.textWrapper}>
          <Text style={styles.sectionTitle}>Search</Text>
          <Text style={styles.temp}>Coming soon...</Text>
        </View>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("AddBook")}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
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
  heading: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  temp: {
    fontSize: 24,
  },
});
