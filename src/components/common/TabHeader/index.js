import React from "react";
import { View } from "react-native";
import styles from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../config/colors";
import Icon from "../Icon";
import Text from "../Text";

const TabHeader = ({ title, route, removeBack, ...props }) => {
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: useSafeAreaInsets().top + 20,
          paddingBottom: 20,
          flexDirection: "row",
        },
      ]}
    >
      <View style={{}}>
        <Text fontSize={12} weight="bold" color={colors.grey.normal.active}>
          LOCATION
        </Text>
        <View style={styles.location}>
          <Text>Lebanon</Text>
          <Icon
            lib="EN"
            name="chevron-down"
            size={20}
            color={colors.green.dark.active}
          />
        </View>
      </View>
    </View>
  );
};

export default TabHeader;
