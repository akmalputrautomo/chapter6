import { reduxRegisterUser } from "../../services/auth/Register_User";
import { CookieKeys, CookieStorage } from "../../utils/Cookies";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http3 from "../../utils/http3";
import { setUser } from "../reducers/auth/authlogin";
import { setEmail, setName, setPassword, setRegis, setToken, setUserRegis } from "../reducers/auth/authregister";

export const RegisterUserr = (input) => async (dispatch) => {
  try {
    const result = await reduxRegisterUser(input);
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    // dispatch(setName(input));
    // dispatch(setEmail(input));
    // dispatch(setPassword(input));
    dispatch(setRegis(true));
    dispatch(setUserRegis(input));
    dispatch(setToken(result.data.data.token));
    return true;
  } catch (err) {
    return false;
  }
};

// export const RegisterUser = (input) => (dispatch) =>
//   // http3
//   //   .post(API_ENDPOINT.REGISTER_USER, input)
//   reduxRegisterUser(input)
//     .then((result) => {
//       CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
//       dispatch(setName(input));
//       dispatch(setEmail(input));
//       dispatch(setPassword(input));
//       dispatch(setToken(result.data.data.token));
//     })
//     .catch((err) => {});
