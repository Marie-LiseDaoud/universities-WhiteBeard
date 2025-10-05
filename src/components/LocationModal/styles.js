import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  locationItem: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey.light.default,
  },
  view: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
});

export default styles;
