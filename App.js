import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Modal from "react-native-modal";

import Panel from "./src/components/Panel";
import Icon from "./src/components/Icon";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Panel onLongPress={() => setIsModalVisible(true)}>
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </Panel>
      <Modal
        isVisible={isModalVisible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        useNativeDriver
        hideModalContentWhileAnimating
        onBackdropPress={() => setIsModalVisible(false)}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Panel />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 27,
    backgroundColor: "#fff"
  }
});
