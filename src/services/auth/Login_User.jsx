import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { CookieKeys, CookieStorage } from "../../utils/Cookies";
// import http2 from "../../utils/http2";
import http3 from "../../utils/http3";
import { toast } from "react-toastify";

export const reduxLoginUser = async (input) => {
  return await http3.post(API_ENDPOINT.LOGIN_USER, input);
};

const LoginUser = async (input) => {
  return await http3
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      // console.log(result.data.data.token);
      return result;
    })
    .catch((err) => {
      if (err.response.data.message === "Wrong password") {
        toast.warning("Password atau Email Salah");
      } else {
        toast.warning("Password atau Email Tidak di isi");
      }
    });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};
export { LoginUser, useLoginUser };
