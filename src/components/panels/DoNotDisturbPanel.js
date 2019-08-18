import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

import Panel from "../Panel";
import Modal from "../Modal";

import { useStateValue } from "../../magic/hooks";
import Separator from "../Separator";

const DoNotDisturbPanel = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [iconValues, dispatch] = useStateValue();
  const changeIconState = slug => () => dispatch({ type: "toggleIcon", slug });
  const isIconActive = iconValues["doNotDisturb"];
  return (
    <>
      <Panel
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
        <View style={styles.header} alignItems="center">
          <Separator height={15} />
          <Image source={require("../../assets/icons/doNotDisturb.png")} />
          <Separator height={10} />

          <Text style={styles.text}>Do Not Disturb</Text>
          <Separator height={15} />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text style={styles.text}>For 1 hour</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text style={styles.text}>Until this evening</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text style={styles.text}>Until i leave this location</Text>
        </TouchableOpacity>
        <View alignItems="center">
          <Separator height={15} />
          <Text style={styles.text}>Schedule</Text>
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
    borderBottomColor: "rgba(255, 255, 255, 0.5)",
    borderBottomWidth: 0.5
  },
  listItem: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderBottomColor: "rgba(255, 255, 255, 0.5)",
    borderBottomWidth: 0.5,
    padding: 10
  }
});

export default DoNotDisturbPanel;
