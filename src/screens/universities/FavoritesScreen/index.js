import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import SearchInput from "../../../components/common/SearchInput/index";
import { SwipeListView } from "react-native-swipe-list-view";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/reducers/universitiesReducer";
import University from "../../../components/University";
import Icon from "../../../components/common/Icon";
import colors from "../../../config/colors";
import Empty from "../../../components/common/Empty";
import Helper from "../../../components/common/HelperText";

const FavoritesScreen = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.universities);

  const removeFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  const filteredFavorites = favorites.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const renderHiddenItem = ({ item }) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => removeFavorite(item)}
      >
        <Icon
          lib="IO"
          name="trash-outline"
          size={22}
          color={colors.white.normal.default}
        />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.frontRow}>
      <University item={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Helper text="Swipe to delete" />

      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search for universities..."
      />

      {filteredFavorites.length === 0 ? (
        <Empty text={"No Universities"} />
      ) : (
        <SwipeListView
          data={filteredFavorites}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          disableRightSwipe
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
