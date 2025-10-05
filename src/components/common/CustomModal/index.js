import React from "react";
import { Modal, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

const CustomModal = ({
  visible,
  onRequestClose,
  leftElement,
  rightElement,
  children,
  style,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onRequestClose}
      transparent={false}
    >
      <View style={[{ flex: 1, paddingTop: insets.top }, style]}>
        <View style={[styles.row]}>
          {leftElement}
          {rightElement}
        </View>
        <View style={[{ flex: 1 }]}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
