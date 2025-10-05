import React from "react";
import { Text as RNText, useWindowDimensions } from "react-native";

import colors from "../../../config/colors.js";

const Text = ({
  weight = "regular",
  fontSize = 16,
  color = colors.black.normal.default,
  children,
  textAlign,
  style,
  onPress,
}) => {
  const { fontScale } = useWindowDimensions();

  return (
    <RNText
      onPress={onPress}
      adjustsFontSizeToFit
      style={[
        {
          fontSize: fontSize / fontScale,
          color: color,
          textAlign: textAlign,
          fontWeight:weight
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
