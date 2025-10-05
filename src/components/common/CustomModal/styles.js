import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white.normal.default,
  },
});

export default styles;
