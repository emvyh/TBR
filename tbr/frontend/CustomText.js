import React from "react";
import { Text, StyleSheet } from "react-native";

export default function CustomText({
  style,
  bold,
  semiBold,
  children,
  ...props
}) {
  return (
    <Text
      style={[
        styles.defaultText,
        semiBold && styles.semiBold,
        bold && styles.bold,
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "StackSansHeadline-Regular",
  },
  semiBold: {
    fontFamily: "StackSansHeadline-SemiBold",
  },
  bold: {
    fontFamily: "StackSansHeadline-Bold",
  },
});
