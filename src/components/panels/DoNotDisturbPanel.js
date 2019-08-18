import React, { useState } from "react";
import { View, Image } from "react-native";

import { useStateValue } from "../../magic/state";

import Panel from "../Panel";
import Modal from "../Modal";
import ListPanelView from "../ListPanelView";

const listItems = [
  {
    id: 0,
    title: "For 1 hour",
    onPress: () => {}
  },
  {
    id: 1,
    title: "Until this evening",
    onPress: () => {}
  },
  {
    id: 2,
    title: "Until I leave this location",
    onPress: () => {}
  }
];

const DoNotDisturbPanel = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [iconValues, dispatch] = useStateValue();
  const changeIconState = () =>
    dispatch({
      type: "toggleIcon",
      slug: "doNotDisturb"
    });
  const isIconActive = iconValues["doNotDisturb"];
  return (
    <>
      <Panel
        onPress={changeIconState}
        isSelected={isIconActive}
        onLongPress={() => setIsModalVisible(true)}
      >
        {isSelected => (
          <View alignItems="center" justifyContent="center">
            {isSelected ? (
              <Image
                source={require("../../assets/icons/doNotDisturbActive.png")}
              />
            ) : (
              <Image source={require("../../assets/icons/doNotDisturb.png")} />
            )}
          </View>
        )}
      </Panel>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        <ListPanelView
          icon={require("../../assets/icons/doNotDisturb.png")}
          headerText="Do Not Disturb"
          footerText="Schedule"
          items={listItems}
        />
      </Modal>
    </>
  );
};

export default DoNotDisturbPanel;
