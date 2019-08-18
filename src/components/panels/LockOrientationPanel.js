import React from "react";
import { View, Image } from "react-native";

import Panel from "../Panel";

import { useStateValue } from "../../magic/hooks";

const LockOrientationPanel = () => {
  const [iconValues, dispatch] = useStateValue();
  const changeIconState = slug => () => dispatch({ type: "toggleIcon", slug });
  const isIconActive = iconValues["lockOrientation"];
  return (
    <Panel
      isSelected={isIconActive}
      onPress={changeIconState("lockOrientation")}
      onLongPress={changeIconState("lockOrientation")}
    >
      {isSelected => (
        <View alignItems="center" justufyContent="center">
          {isSelected ? (
            <Image
              source={require("../../assets/icons/lockOrientationActive.png")}
            />
          ) : (
            <Image source={require("../../assets/icons/lockOrientation.png")} />
          )}
        </View>
      )}
    </Panel>
  );
};

export default LockOrientationPanel;
