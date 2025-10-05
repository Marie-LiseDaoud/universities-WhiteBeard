import React from "react";
import colors from "../../../config/colors";
import Text from "../Text";

const Helper = ({ text }) => {
  return (
    <Text
      fontSize={12}
      color={colors.green.normal.active}
      style={{ fontStyle: "italic", marginBottom: 8 }}
    >
      {text}
    </Text>
  );
};

export default Helper;
