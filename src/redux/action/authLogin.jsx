import axios from "axios";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { CookieKeys, CookieStorage } from "../../utils/Cookies";
import http2 from "../../utils/http3";
import { setIsLoggedIn, setToken, setUser } from "../reducers/auth/authlogin";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import http3 from "../../utils/http3";
import { reduxLoginUser } from "../../services/auth/Login_User";

// export const LoginUser = (input) => (dispatch) => {
//   reduxLoginUser(input)
//     .try((result) => {
//       CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
//       dispatch(setToken(result.data.data.token));
//       // dispatch(setIsLoggedIn(true));
//       // dispatch(setUser(input));
//       // window.location.href = "/halaman";
//       // navigate("/halaman");
//     })
//     .catch((err) => {
//     });
// };

export const LoginUser = (input) => async (dispatch) => {
  try {
    const result = await reduxLoginUser(input);
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    dispatch(setToken(result.data.data.token));
    // toast.success("anda berhasil login");
    dispatch(setIsLoggedIn(true));
    dispatch(setUser(input));
    // window.location.href = "/halaman";
    // navigate("/halaman");
    return true;
  } catch (err) {
    return false;
  }
};

export const LogOut = (input) => (dispatch) => {
  dispatch(setToken(undefined));
  dispatch(setIsLoggedIn(false));
  CookieStorage.remove(CookieKeys.AuthToken);
  window.location.href = "/";
};
