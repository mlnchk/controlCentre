import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

import Panel from "./src/components/Panel";
import Icon from "./src/components/Icon";
import Modal from "./src/components/Modal";

const Separator = ({ width = 0, height = 0 }) => (
  <View style={{ width, height }} />
);

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <ImageBackground
      source={require("./src/assets/background.png")}
      style={styles.container}
    >
      <View style={styles.row}>
        <Panel onLongPress={() => setIsModalVisible(true)}>
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
        </Panel>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      />
    </ImageBackground>
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
