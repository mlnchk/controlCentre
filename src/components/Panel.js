import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { useAnimation } from "../magic/hooks";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 18,
    flex: 1,
    aspectRatio: 1,
    justifyContent: "space-evenly"
  },
  selected: {
    backgroundColor: "#ffffff"
  }
});

const Panel = props => {
  const [isScaled, setIsScaled] = useState(false);
  const scale = useAnimation({
    initialValue: isScaled ? 1.1 : 1,
    toValue: isScaled ? 1.1 : 1,
    useNativeDriver: true,
    duration: 100
  });
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={() => setIsScaled(true)}
      onPressOut={() => setIsScaled(false)}
      {...props}
      style={[
        styles.root,
        props.isSelected && styles.selected,
        {
          transform: [{ scaleY: scale }, { scaleX: scale }]
        }
      ]}
    >
      {typeof props.children === "function"
        ? props.children(props.isSelected)
        : props.children}
    </TouchableOpacity>
  );
};

export default Panel;
