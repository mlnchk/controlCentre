import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  StyleSheet
} from "react-native";

import Separator from "./Separator";

const keyExtractor = ({ title }) => title;

const DoNotDisturbPanel = ({ icon, headerText, footerText, items }) => (
  <>
    <View style={styles.header} alignItems="center">
      <Separator height={15} />
      <Image source={icon} />
      <Separator height={10} />
      <Text style={styles.text}>{headerText}</Text>
      <Separator height={15} />
    </View>
    <FlatList
      style={styles.flatList}
      keyExtractor={keyExtractor}
      data={items}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={item.onPress} style={styles.listItem}>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
    <View alignItems="center">
      <Separator height={15} />
      <Text style={styles.text}>{footerText}</Text>
      <Separator height={15} />
    </View>
  </>
);

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 14
  },
  flatList: {
    flexGrow: 0
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

export default DoNotDisturbPanel;
