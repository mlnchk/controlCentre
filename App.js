import React from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";

import {
  ConnectionsPanel,
  DoNotDisturbPanel,
  LockOrientationPanel,
  ScreenMirroringPanel
} from "./src/components/panels";
import Row from "./src/components/Row";
import Separator from "./src/components/Separator";

import { StateProvider } from "./src/magic/hooks";

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

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ImageBackground
        style={styles.container}
        source={require("./src/assets/background.png")}
      >
        <SafeAreaView>
          <Row>
            <ConnectionsPanel />
            <Separator width={15} />
            <View flex={1} justifyContent="space-between">
              <Row>
                <DoNotDisturbPanel />
                <Separator width={15} />
                <LockOrientationPanel />
              </Row>
              <Separator height={15} />
              <Row flex={1}>
                {/* TODO: remove flex */}
                <ScreenMirroringPanel />
              </Row>
            </View>
          </Row>
        </SafeAreaView>
      </ImageBackground>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    justifyContent: "center"
  }
});
