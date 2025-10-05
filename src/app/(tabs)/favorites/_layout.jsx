import { Stack } from "expo-router";
import TabHeader from "../../../components/common/TabHeader/index";

const FavoritesLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: (props) => <TabHeader title="Favorite Universities" {...props} />,
        }}
      />
    </Stack>
  );
};

export default FavoritesLayout;
