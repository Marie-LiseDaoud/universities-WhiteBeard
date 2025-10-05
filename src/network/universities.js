import instance from "./ApiAxios";

export const getUniversities = async ({ pageParam = 0, limit = 10, search = "", country = "" }) => {
  const response = await instance.get("/search", {
    params: {
      limit,
      offset: pageParam,
      name: search,
      country: country, 
    },
  });
  return response.data;
};
