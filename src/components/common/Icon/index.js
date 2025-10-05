import { TouchableOpacity } from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Zocial from "@expo/vector-icons/Zocial";

import colors from "../../../config/colors";

const iconMap = {
  AD: AntDesign,
  EN: Entypo,
  EI: EvilIcons,
  FE: Feather,
  FA: FontAwesome,
  FA5: FontAwesome5,
  FS: Fontisto,
  FO: Foundation,
  IO: Ionicons,
  MC: MaterialCommunityIcons,
  MI: MaterialIcons,
  OC: Octicons,
  SL: SimpleLineIcons,
  ZO: Zocial,
};

const Icon = ({
  lib = "AD",
  name,
  size = 24,
  color = colors.grey,
  onPress,
  ...props
}) => {
  const IconComponent = iconMap[lib];

  if (!IconComponent) {
    return null;
  }

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <IconComponent name={name} size={size} color={color} {...props} />
      </TouchableOpacity>
    );
  }

  return <IconComponent name={name} size={size} color={color} {...props} />;
};

export default Icon;
