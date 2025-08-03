import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { CameraView, Camera } from "expo-camera";

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
          <Text style={styles.sectionTitle}>Scan Barcode</Text>
        </View>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("AddBook")}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          onBarcodeScanned={handleBarcodeScan}
          barcodeScannerSettings={{
            barcodeTypes: ["ean13", "ean8", "code128"],
          }}
        />

        {scanned && (
          <View style={styles.scannedOverlay}>
            <Text style={styles.scannedText}>Barcode Scanned!</Text>
          </View>
        )}

        <View style={styles.scannerOverlay}>
          <View style={styles.scannerFrame} />
          <Text style={styles.instructionText}>
            Point camera at book barcode
          </Text>
        </View>
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
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  permissionText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "black",
  },
  cameraContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
  },
  scannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scannerFrame: {
    width: 250,
    height: 150,
    borderWidth: 3,
    borderColor: "#ff66c4",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  instructionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  scannedOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 102, 196, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  scannedText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
