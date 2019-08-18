import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { useAnimation } from "../magic/hooks";

const Panel = ({ isSelected, isFlexible, children, ...rest }) => {
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
      {...rest}
      style={[
        styles.root,
        isSelected && styles.selected,
        isFlexible && { aspectRatio: null },
        {
          transform: [{ scaleY: scale }, { scaleX: scale }]
        }
      ]}
    >
      {typeof children === "function" ? children(isSelected) : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 18,
    aspectRatio: 1,
    flex: 1,
    justifyContent: "space-evenly"
  },
  selected: {
    backgroundColor: "#ffffff"
  }
});

export default Panel;
