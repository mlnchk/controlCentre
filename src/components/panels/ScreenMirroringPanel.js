import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

import Panel from "../Panel";
import Modal from "../Modal";
import Separator from "../Separator";

const ScreenMirroringPanel = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Panel
        isFlexible
        isSelected={false}
        onLongPress={() => setIsModalVisible(true)}
      >
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
        <View style={styles.header} alignItems="center">
          <Separator height={15} />
          <Image source={require("../../assets/icons/screenMirroring.png")} />
          <Separator height={10} />

          <Text style={styles.text}>Screen Mirroring</Text>
          <Separator height={15} />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text style={styles.text}>Looking for Apple TV...</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text style={styles.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text style={styles.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text style={styles.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text style={styles.text} />
        </TouchableOpacity>
        <View alignItems="center">
          <Separator height={15} />
          <Text style={styles.text} />
          <Separator height={15} />
        </View>
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
