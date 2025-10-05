import { useInfiniteQuery } from "@tanstack/react-query";
import { getUniversities } from "../network/universities";

export const useUniversities = (search = "", country = "") => {
  return useInfiniteQuery({
    queryKey: ["universities", search, country],
    queryFn: ({ pageParam = 0 }) =>
      getUniversities({ pageParam, limit: 10, search, country }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined;
      }

      return allPages.flat().length;
    },
    initialPageParam: 0,
    keepPreviousData: true,
  });
};
