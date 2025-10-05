import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../config/colors";
import styles from "./styles";
import Text from "../common/Text";
import SearchInput from "../common/SearchInput";
import CustomModal from "../common/CustomModal";
import { setSelectedCountry } from "../../redux/reducers/filtersReducer";
import Empty from "../common/Empty";
import { useCountries } from "../../hooks/useCountries";
import Loading from "../common/Loading";
import Error from "../common/Error";

const LocationModal = ({ visible, onClose }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { selectedCountry } = useSelector((state) => state.filters);

  const { countries, isLoading, error } = useCountries();

  const filteredCountries = [
    "All Countries",
    ...(countries || [])
      .map((c) => c?.name?.common)
      .filter((country) =>
        country?.toLowerCase().includes(search.toLowerCase())
      ),
  ];

  const handleSelect = (country) => {
    dispatch(setSelectedCountry(country === "All Countries" ? null : country));
    onClose();
  };
  return (
    <CustomModal
      visible={visible}
      onRequestClose={onClose}
      leftElement={
        <Text weight="bold" color={colors.green.normal.default}>
          Filter by location
        </Text>
      }
      rightElement={
        <TouchableOpacity onPress={onClose}>
          <Text style={{ color: colors.black.normal.default }}>Close</Text>
        </TouchableOpacity>
      }
    >
      <View style={styles.view}>
        <SearchInput
          value={search}
          onChangeText={setSearch}
          placeholder={"Search for countries..."}
        />

        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error error="Failed to load countries" />
        ) : (
          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const isSelected =
                (item === "All Countries" && !selectedCountry) ||
                item === selectedCountry;
              return (
                <TouchableOpacity
                  style={[
                    styles.locationItem,
                    isSelected && {
                      backgroundColor: colors.green.light.default,
                    },
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text
                    weight={isSelected ? "bold" : "normal"}
                    color={
                      isSelected
                        ? colors.green.dark.default
                        : colors.black.normal.default
                    }
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={<Empty text={"No countries found."} />}
          />
        )}
      </View>
    </CustomModal>
  );
};

export default LocationModal;
