import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http3 from "../../utils/http3";
import { CookieStorage } from "../../utils/Cookies";

const fetchDataMovie = async (token) => {
  // untuk handle api
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await http3.get(`${API_ENDPOINT.NOW_POPULAR}`);
  // const [_key, _params] = queryKey;
  // const { data } = await http3.get(_key, { params: _params });
  return data;
};

// const useMovieDataQuery = (options) => {
// return useQuery(["userDataNowPlaying", page], () => fetchDataMovie(page));
//   return useQuery([API_ENDPOINT.NOW_POPULAR, options], fetchDataMovie);
// };
// export { fetchDataMovie, useMovieDataQuery };
export { fetchDataMovie };
