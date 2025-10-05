
import { countriesInstance } from './CountriesAxios';

export const getCountries = async () => {
  const response = await countriesInstance.get("all?fields=name");
  return response.data;
};
