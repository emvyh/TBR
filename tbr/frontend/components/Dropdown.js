import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import CustomText from "../CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CurrentRenderContext } from "@react-navigation/native";

const Dropdown = ({
  options = [],
  value,
  onSelect,
  placeholder = "Select...",
  multiSelect = false,
}) => {
  const [visible, setVisible] = useState(false);

  //FUNCTION: CHECK IF OPTION IS CURRENTLY SELECTED
  const isSelected = (option) => {
    if (multiSelect) {
      return Array.isArray(value) && value.includes(option);
      //if it multiselect mode include the option in the array
    }
    return value === option;
    //if single select makesure the value == option
  };

  //FUNCTION TAPPING OPTIONS
  const handleSelect = (option) => {
    if (multiSelect) {
      // if the value isnt an array yet make the array
      const currValues = Array.isArray(value) ? value : [];

      //check if option is already selected
      if (currValues.includes(option)) {
        //if selected remove it
        const newValues = currValues.filter((item) => item !== option);
        onSelect(newValues);
      } else {
        // if its not selected add it
        const newValues = [...currValues, option];
        onSelect(newValues);
      }
      //dont close modal and let user click more
    } else {
      //single select move (og behavior)
      onSelect(option);
      setVisible(false);
    }
  };

  //FUNCTION DISPLAU SELECTED VALUES
  const getDisplayText = () => {
    if (multiSelect && Array.isArray(value) && value.length > 0) {
      if (value.length === 1) {
        return value[0]; //show single item
      }
      return `${value.length} selected`;
    }
    return value || placeholder;
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonandmodal}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setVisible(true)}
          activeOpacity={0.8}
        >
          <CustomText style={styles.dropdownText}>
            {getDisplayText()}
          </CustomText>
          <Ionicons
            name={visible ? "chevron-up" : "chevron-down"}
            size={20}
            color="#fff"
          />
        </TouchableOpacity>

        <Modal
          visible={visible}
          transparent
          animationType="fade"
          onRequestClose={() => setVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <View style={styles.modalBackdrop} />
          </TouchableWithoutFeedback>

          <View style={styles.modalContentWrapper}>
            <View style={styles.dropdownList}>
              <ScrollView
                nestedScrollEnabled
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
              >
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.dropdownItem,
                      index === options.length - 1 && styles.lastItem,
                    ]}
                    onPress={() => handleSelect(option)}
                  >
                    <CustomText style={styles.dropdownItemText}>
                      {option}
                    </CustomText>
                    {isSelected(option) && (
                      <Ionicons name="checkmark" size={20} color="#fc6271ff" />
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {multiSelect && (
                <TouchableOpacity
                  style={styles.doneButton}
                  onPress={() => setVisible(false)}
                >
                  <CustomText style={styles.doneButtonText}>Done</CustomText>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { zIndex: 1000, position: "relative" },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  dropdownText: { color: "#fff", fontSize: 16 },

  modalBackdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  buttonandmodal: {
    flexDirection: "column",
  },

  modalContentWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  dropdownList: {
    backgroundColor: "#fff",
    borderRadius: 10,
    maxHeight: 200,
    elevation: 8,
    overflow: "hidden",
    width: 350,
  },

  scrollContent: {
    // optional padding inside scroll
  },

  dropdownItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  lastItem: { borderBottomWidth: 0 },
  dropdownItemText: { fontSize: 16, color: "#333" },
  doneButton: {
    backgroundColor: "#fc6271ff",
    padding: 12,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },

  doneButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Dropdown;
