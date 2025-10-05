import React from "react";
import Text from "../Text";
import { View } from "react-native";
import styles from "./styles";

const Empty = ({ text }) => {
  return (
    <View style={styles.view}>
      <Text>{text}</Text>
    </View>
  );
};

export default Empty;
