import { GetUser } from "../../services/auth/Get_User";
import { setIsUserIn } from "../reducers/auth/getuser";

export const GetUserrr = () => async (dispatch) => {
  GetUser()
    .then((result) => {
      dispatch(setIsUserIn(result.data.data));
    })
    .catch((err) => {});
};
