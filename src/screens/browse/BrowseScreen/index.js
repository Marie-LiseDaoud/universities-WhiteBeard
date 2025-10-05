import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
import SearchInput from "../../../components/common/SearchInput/index";
import { useUniversities } from "../../../hooks/useUniversities";
import { FlashList } from "@shopify/flash-list";
import University from "../../../components/University";
import Loading from "../../../components/common/Loading";
import Error from "../../../components/common/Error";
import { toggleFavorite } from "../../../redux/reducers/universitiesReducer";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../../../components/common/Empty";
import Helper from "../../../components/common/HelperText";

const BrowseScreen = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.universities);
  const { selectedCountry } = useSelector((state) => state.filters);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(handler);
  }, [search]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    refetch,
  } = useUniversities(debouncedSearch, selectedCountry);

  const universities = data?.pages.flat() || [];

  const addToFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  if (isLoading) return <Loading />;
  if (error)
    return <Error error={"Failed to load universities"} onPress={refetch} />;

  return (
    <View style={styles.container}>
      <Helper text="Tap on a university to view its website. You can add universities to your favorites by tapping the heart icon." />

      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder={"Search for universities..."}
      />

      {universities.length === 0 ? (
        <Empty text={"No Universities"} />
      ) : (
        <FlashList
          data={universities}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => (
            <University
              item={item}
              onToggleFavorite={() => addToFavorite(item)}
              isFavorite={favorites.some(
                (fav) => fav.name === item.name && fav.country === item.country
              )}
            />
          )}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) fetchNextPage();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator style={{ marginVertical: 16 }} />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default BrowseScreen;
