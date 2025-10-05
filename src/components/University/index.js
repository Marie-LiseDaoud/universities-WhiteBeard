import React, { useState } from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import Text from "../common/Text";
import Icon from "../common/Icon";
import colors from "../../config/colors";
import styles from "./styles";
import { WebView } from "react-native-webview";
import CustomModal from "../common/CustomModal";

const University = ({ item, onToggleFavorite, isFavorite }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const homepage = Array.isArray(item.web_pages)
    ? item.web_pages[0]
    : item.web_pages;

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => homepage && setModalVisible(true)}
      >
        <View style={{ flex: 1 }}>
          <Text weight="bold">{item.name}</Text>
          <Text>Country: {item.country}</Text>
          {item["state-province"] && (
            <Text>State/Province: {item["state-province"]}</Text>
          )}
        </View>
        {onToggleFavorite && (
          <Icon
            onPress={() => {
              onToggleFavorite(item);
            }}
            lib="EN"
            name={isFavorite ? "heart" : "heart-outlined"}
            size={20}
            color={colors.green.dark.active}
          />
        )}
      </TouchableOpacity>
      <CustomModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        rightElement={
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text color={colors.black.normal.default}>Close</Text>
          </TouchableOpacity>
        }
        leftElement={
          <TouchableOpacity
            onPress={() => homepage && Linking.openURL(homepage)}
          >
            <Text color={colors.green.normal.default}>Expand</Text>
          </TouchableOpacity>
        }
      >
        <WebView source={{ uri: homepage }} style={{ flex: 1 }} />
      </CustomModal>
    </>
  );
};

export default University;
