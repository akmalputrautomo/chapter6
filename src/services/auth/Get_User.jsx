import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
// import http2 from "../../utils/http2";
// import http3 from "../../utils/http3";
// import http2 from "../../utils/http2";
import http3 from "../../utils/http3";
import { CookieKeys } from "../../utils/Cookies";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

export const GetUser = async () => {
  return await http3.get(API_ENDPOINT.GET_USER);
};

const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};

const fetchUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http3
    .get(_key)
    .then((value) => {
      // let DataHasil = {
      //   nama: value.data.data.name,
      //   email: value.data.data.email,
      // };
      // return { data: DataHasil };
    })
    .catch((err) => {
      // if (err.response.status === 401) {
      //   window.location.href = "/";
      // }
    });
  return data;
};
export { fetchUserData, useGetDataUser };
