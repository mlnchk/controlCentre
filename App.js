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

import { StateProvider } from "./src/magic/state";

export default function App() {
  return (
    <StateProvider>
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
              <ScreenMirroringPanel />
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
