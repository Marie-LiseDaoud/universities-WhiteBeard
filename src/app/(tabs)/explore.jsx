import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabTwoScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>boilerplate</Text>
      <Entypo name="chevron-down" size={24} color="black" /> 
      <Text>Tab Two</Text>
    </View>
  );
}
