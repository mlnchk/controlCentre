import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

import Panel from "./src/components/Panel";
import Icon from "./src/components/Icon";

import ConnectionsPanel from "./src/components/panels/ConnectionsPanel";
import DoNotDisturbPanel from "./src/components/panels/DoNotDisturbPanel";
import Row from "./src/components/Row";
import Separator from "./src/components/Separator";

import { StateProvider } from "./src/magic/hooks";

const Panel2 = ({ setIsModalVisible }) => (
  <Panel size="m" onLongPress={() => setIsModalVisible(true)}>
    <Row>
      <Icon name="hotspot" />
    </Row>
  </Panel>
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
        <Row>
          <ConnectionsPanel />
          <Separator width={15} />
          <View flex={1} justifyContent="space-between">
            <Row>
              <DoNotDisturbPanel />
              <Separator width={15} />
              <Panel2 />
            </Row>
            <Row>
              <Panel2 />
              <Separator width={15} />
              <Panel2 />
            </Row>
          </View>
        </Row>
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
