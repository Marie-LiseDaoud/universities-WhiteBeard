import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../network/countries";

export const useCountries = () => {
  const { data, refetch, isFetching, isRefetching, isLoading, error } =
    useQuery({
      queryKey: ["countries"],
      queryFn: () => getCountries(),
    });

  return {
    countries: data,
    isLoading,
    error,
    isFetching,
    isRefetching,
    refetch,
  };
};
