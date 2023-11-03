import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http3 from "../../utils/http3";
import { CookieStorage } from "../../utils/Cookies";
import { useParams } from "react-router-dom";

export const MovieDetail = async (movieId) => {
  return await http3.get(API_ENDPOINT.NOW_DETAIL(movieId.movieId));
};

const fetchDataMovieDetails = async (token, movieId) => {
  //   const movieId = useParams();
  // untuk handle api
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await http3.get(API_ENDPOINT.NOW_DETAIL(movieId.movieId));
  return response.data;
  // const [_key, _params] = queryKey;
  // const { data } = await http3.get(_key, { params: _params });
};

// const useMovieDataQuery = (options) => {
// return useQuery(["userDataNowPlaying", page], () => fetchDataMovie(page));
//   return useQuery([API_ENDPOINT.NOW_POPULAR, options], fetchDataMovie);
// };
// export { fetchDataMovie, useMovieDataQuery };
export { fetchDataMovieDetails };
