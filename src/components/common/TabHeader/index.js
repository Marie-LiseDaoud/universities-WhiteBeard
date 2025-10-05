import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../config/colors";
import Icon from "../Icon";
import Text from "../Text";
import LocationModal from "../../LocationModal";
import { useSelector } from "react-redux";

const TabHeader = ({ title, route, removeBack, ...props }) => {
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const { selectedCountry } = useSelector((state) => state.filters);
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
      {title ? (
        <Text fontSize={16} weight="bold" color={colors.black.normal.active}>
          {title}
        </Text>
      ) : (
        <TouchableOpacity
          style={{}}
          onPress={() => setLocationModalVisible(true)}
        >
          <Text fontSize={12} weight="bold" color={colors.grey.normal.active}>
            LOCATION
          </Text>
          <View style={styles.location}>
            <Text>{selectedCountry ? selectedCountry : "Choose Country"}</Text>
            <Icon
              lib="EN"
              name="chevron-down"
              size={20}
              color={colors.green.dark.active}
            />
          </View>
        </TouchableOpacity>
      )}

      <LocationModal
        visible={locationModalVisible}
        onClose={() => setLocationModalVisible(false)}
      />
    </View>
  );
};

export default TabHeader;
