import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

import Panel from "./src/components/Panel";
import Icon from "./src/components/Icon";
import Modal from "./src/components/Modal";

import { StateProvider } from "./src/magic/hooks";

const Separator = ({ width = 0, height = 0 }) => (
  <View style={{ width, height }} />
);

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const initialState = {};

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleIcon":
        return {
          ...state,
          [action.slug]: !state[action.slug]
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ImageBackground
        source={require("./src/assets/background.png")}
        style={styles.container}
      >
        <View style={styles.row}>
          <Panel size="m" onLongPress={() => setIsModalVisible(true)}>
            <View style={styles.row}>
              <View flexGrow={0.5} alignItems="center">
                <Icon name="airplane" />
              </View>
              <View flexGrow={0.5} alignItems="center">
                <Icon name="cellular" />
              </View>
            </View>
          </Panel>
        </View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
        >
          <Separator width={15} />
          <View style={styles.row}>
            <Icon name="airplane" />
            <Separator width={15} />
            <Icon name="cellular" />
          </View>
          <Separator height={15} />
          <View style={styles.row}>
            <Icon name="wifi" />
            <Separator width={15} />
            <Icon name="bluetooth" />
          </View>
        </Modal>
      </ImageBackground>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 27,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  row: {
    // flex: 1,
    flexDirection: "row"
    // justifyContent: "space-between"
    // marginBottom: 15
  },
  box: {
    flex: 1
  }
});
