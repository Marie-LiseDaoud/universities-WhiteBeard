import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./styles";

const SearchInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  textAlign,
  color = "grey",
  ...props
}) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        textAlign={textAlign || "left"}
        style={[styles.search, { color: "black" }]}
        placeholderTextColor={color}
        {...props}
      />
    </View>
  );
};

export default SearchInput;
