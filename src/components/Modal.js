import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import RNModal from "react-native-modal";

import Panel from "./Panel";

const Modal = ({ children, onBackdropPress, ...rest }) => (
  <RNModal
    {...rest}
    animationIn="zoomIn"
    animationOut="zoomOut"
    useNativeDriver
    hideModalContentWhileAnimating
    backdropOpacity={1}
    animationInTiming={200}
    animationOutTiming={200}
    style={[styles.root]}
    customBackdrop={
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        <Image source={require("../assets/background.png")} />
      </TouchableWithoutFeedback>
    }
  >
    <Panel isFlexible>{children}</Panel>
  </RNModal>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 27,
    flexDirection: "row"
  }
});

export default Modal;
