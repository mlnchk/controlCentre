import React from "react";
import { View } from "react-native";

const Row = props => (
  <View flexDirection="row" justifyContent="space-evenly" {...props} />
);

export default Row;
