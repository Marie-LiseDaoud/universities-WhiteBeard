import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: colors.white.normal.default,
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  frontRow: {
    backgroundColor: colors.white.normal.default,
  },
  rowBack: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.red.normal.default,
    borderRadius: 8,
    marginVertical: 5,
    paddingRight: 10,
  },
  deleteBtn: {
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
