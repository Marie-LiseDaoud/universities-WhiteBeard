import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import colors from "../../../config/colors";
const Loading = () => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size="large" color={colors.grey.normal.active}/>
    </View>
  );
};

export default Loading;
