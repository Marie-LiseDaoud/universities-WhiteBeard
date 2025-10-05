import React from "react";
import Text from "../Text";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import colors from "../../../config/colors";

const Error = ({ error, onPress }) => {
  return (
    <View style={styles.view}>
      <Text>{error}</Text>
      {onPress && (
        <TouchableOpacity onPress={onPress}>
          <Text weight="bold" color={colors.red.normal.default}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Error;
