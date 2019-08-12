import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { useAnimation } from "../magic/hooks";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 18,
    padding: 15,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    // remove it
    height: 153,
    width: 153
  },
  scaled: {
    width: 160,
    height: 160
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
      onPress={() => console.log("onPress")}
      // onLongPress={() => console.log("onLongPress")}
      {...props}
      style={[
        styles.root,
        {
          transform: [{ scaleY: scale }, { scaleX: scale }]
        }
      ]}
    />
  );
};

export default Panel;
