import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http3 from "../../utils/http3";

export const getDataSearch = async (query) => {
  return await http3.get(`${API_ENDPOINT.NOW_SEARCH}?page=1&query=${query ? query : ""}`);
};

const fetchDataMovieSearch = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http3.get(_key, { params: _params });
  return data;
};

const useMovieDataSearchQuery = (options) => {
  return useQuery([API_ENDPOINT.NOW_SEARCH, options], fetchDataMovieSearch);
};
export { fetchDataMovieSearch, useMovieDataSearchQuery };
