import { useQuery } from "@tanstack/react-query";
// import http from "../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { fetchDataMovie } from "./get-data-movie";
import http3 from "../../utils/http3";
import http from "../../utils/http";
import axios from "axios";

export const getDataPopular = async () => {
  return await http3.get(API_ENDPOINT.NOW_POPULAR);
};

const fetchDataMoviePopular = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http3.get(_key, { params: _params });
  return data;
};

const useMovieDataPopularQuery = (options) => {
  return useQuery([API_ENDPOINT.NOW_POPULAR, options], fetchDataMovie);
};
export { fetchDataMoviePopular, useMovieDataPopularQuery };
