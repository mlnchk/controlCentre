import React from "react";
import { View, StyleSheet } from "react-native";

const iconSize = 54;

const styles = StyleSheet.create({
  root: {
    width: iconSize,
    height: iconSize,
    borderRadius: iconSize / 2,
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  }
});

const Icon = props => <View {...props} style={styles.root} />;

export default Icon;
