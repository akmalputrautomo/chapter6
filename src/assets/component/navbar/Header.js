import React, { useEffect } from "react";
import Brand from "./Brand";
import Search from "./Search";
import Button from "./Button";
import { CookieKeys, CookieStorage } from "../../../utils/Cookies";
import { useGetDataUser } from "../../../services/auth/Get_User";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, LogOutt } from "../../../redux/action/authLogin";
import { GetUserrr } from "../../../redux/action/getUser";

const Headers = () => {
  // const { data: Paijosalto, error, isError, status } = useGetDataUser({});
  const Get = useSelector((state) => state.get);
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.auth);
  console.log(Get, "GetUser");

  const getdatauser = () => {
    dispatch(GetUserrr());
  };

  useEffect(() => {
    getdatauser();
  }, []);

  return (
    <div className="flex bg-transparent fixed z-10 justify-between items-center w-full p-4">
      <Brand />
      <Search />
      <div className="flex gap-2">
        {/* <Button variant="secondary">Login</Button> */}
        <Button
          variant="primary"
          onClick={() => {
            dispatch(LogOut());
          }}
        >
          log out
        </Button>
      </div>
    </div>
  );
};
export default Headers;
