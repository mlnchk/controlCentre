import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
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
  },
  title: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "white"
  },
  subTitle: {
    marginTop: 2,
    textAlign: "center",
    fontSize: 12,
    color: "white"
  }
});

const icons = {
  airdrop: {
    title: "AirDrop",
    activeColor: "#007AFF",
    icon: require("../assets/icons/airdrop.png")
  },
  airplane: {
    title: "Airplane Mode",
    activeColor: "#F19938",
    icon: require("../assets/icons/airplane.png")
  },
  bluetooth: {
    title: "Bluetooth",
    activeColor: "#007AFF",
    icon: require("../assets/icons/bluetooth.png")
  },
  cellular: {
    title: "Mobile Data",
    activeColor: "#4CD964",
    icon: require("../assets/icons/cellular.png")
  },
  hotspot: {
    title: "Personal Hotspot",
    activeColor: "#4CD964",
    icon: require("../assets/icons/hotspot.png")
  },
  wifi: {
    title: "WiFi",
    activeColor: "#007AFF",
    icon: require("../assets/icons/wifi.png")
  }
};

const Icon = ({ name, withTitle, ...rest }) => {
  const [iconValues, dispatch] = useStateValue();
  const changeIconState = slug => () => dispatch({ type: "toggleIcon", slug });
  const isIconActive = iconValues[name];

  return (
    <View alignItems="center" flex={1}>
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
      {withTitle && (
        <>
          <Text style={styles.title}>{icons[name].title}</Text>
          <Text style={styles.subTitle}>{isIconActive ? "On" : "Off"}</Text>
        </>
      )}
    </View>
  );
};

export default Icon;
