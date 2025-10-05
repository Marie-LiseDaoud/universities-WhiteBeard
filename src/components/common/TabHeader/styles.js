import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white.normal.default,
    boxShadow: "0px 0px 3px rgba(189, 189, 206, 1)",
  },


  location: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
});

export default styles;
