import React, { useState } from "react";
import { View, Image } from "react-native";

import Row from "../Row";
import Panel from "../Panel";
import Modal from "../Modal";
import Icon from "../Icon";

import { useStateValue } from "../../magic/hooks";

const DoNotDisturbPanel = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [iconValues, dispatch] = useStateValue();
  const changeIconState = slug => () => dispatch({ type: "toggleIcon", slug });
  const isIconActive = iconValues["doNotDisturb"];
  return (
    <>
      <Panel
        size="m"
        onPress={changeIconState("doNotDisturb")}
        isSelected={isIconActive}
        onLongPress={() => setIsModalVisible(true)}
      >
        {isSelected => (
          <View alignItems="center" justufyContent="center">
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
        <Row>
          <Icon withTitle name="airplane" />
          <Icon withTitle name="cellular" />
        </Row>
        <Row>
          <Icon withTitle name="wifi" />
          <Icon withTitle name="bluetooth" />
        </Row>
        <Row>
          <Icon withTitle name="airdrop" />
          <Icon withTitle name="hotspot" />
        </Row>
      </Modal>
    </>
  );
};

export default DoNotDisturbPanel;
