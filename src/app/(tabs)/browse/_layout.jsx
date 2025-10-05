

import { Stack } from "expo-router";
import TabHeader from "../../../components/common/TabHeader";


const HomeLayout = () => {
  return (
    <Stack
       screenOptions={{
        header: (props) => (
          <TabHeader
            {...props}
          />
        ),
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default HomeLayout;
