import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import Panel from "../Panel";
import Modal from "../Modal";
import Separator from "../Separator";
import ListPanelView from "../ListPanelView";

const listItems = [
  {
    id: 0,
    title: "Looking for Apple TV...",
    onPress: () => {}
  },
  {
    id: 1,
    title: "",
    onPress: () => {}
  },
  {
    id: 2,
    title: "",
    onPress: () => {}
  },
  {
    id: 3,
    title: "",
    onPress: () => {}
  },
  {
    id: 4,
    title: "",
    onPress: () => {}
  }
];

const ScreenMirroringPanel = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Panel isFlexible onLongPress={() => setIsModalVisible(true)}>
        <View flexDirection="row" alignItems="center" justifyContent="center">
          <Image source={require("../../assets/icons/screenMirroring.png")} />
          <Separator width={13} />
          <Text style={styles.text}>Screen{"\n"}Mirroring</Text>
        </View>
      </Panel>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        <ListPanelView
          icon={require("../../assets/icons/screenMirroring.png")}
          headerText="Screen Mirroring"
          footerText=""
          items={listItems}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 14
  },
  header: {
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    borderBottomWidth: 0.5
  },
  listItem: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    borderBottomWidth: 0.5,
    padding: 15
  }
});

export default ScreenMirroringPanel;
