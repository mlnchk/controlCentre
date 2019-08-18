import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useStateValue } from "../magic/hooks";

const iconSize = 54;

const styles = StyleSheet.create({
  root: {
    width: iconSize,
    height: iconSize,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: iconSize / 2,
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  }
});

const icons = {
  airdrop: {
    activeColor: "#007AFF",
    icon: require("../assets/icons/airdrop.png")
  },
  airplane: {
    activeColor: "#F19938",
    icon: require("../assets/icons/airplane.png")
  },
  bluetooth: {
    activeColor: "#007AFF",
    icon: require("../assets/icons/bluetooth.png")
  },
  cellular: {
    activeColor: "#4CD964",
    icon: require("../assets/icons/cellular.png")
  },
  hotspot: {
    activeColor: "#4CD964",
    icon: require("../assets/icons/hotspot.png")
  },
  wifi: { activeColor: "#007AFF", icon: require("../assets/icons/wifi.png") }
};

const iconsInitialState = Object.keys(icons).reduce(
  (acc, value) => ({ ...acc, [value]: false }),
  {}
);

const Icon = ({ name, ...rest }) => {
  // const [iconValues, setIconValues] = useState(iconsInitialState);
  const [iconValues, dispatch] = useStateValue();
  // const changeIconState = slug => () =>
  //   setIconValues({ ...iconValues, [slug]: !iconValues[slug] });
  const changeIconState = slug => () => dispatch({ type: "toggleIcon", slug });
  const isIconActive = iconValues[name];

  return (
    <TouchableOpacity
      {...rest}
      onPress={changeIconState(name)}
      style={[
        styles.root,
        isIconActive && { backgroundColor: icons[name].activeColor }
      ]}
    >
      <Image source={icons[name].icon} />
    </TouchableOpacity>
  );
};

export default Icon;
