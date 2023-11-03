import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http3 from "../../utils/http3";
import http2 from "../../utils/http2";
import http from "../../utils/http";
import { toast } from "react-toastify";

export const reduxRegisterUser = async (input) => {
  return await http3.post(API_ENDPOINT.REGISTER_USER, input);
};

const RegisterUser = async (input) => {
  try {
    await http3.post(API_ENDPOINT.REGISTER_USER, input);
  } catch (error) {
    if (error.response.data.message === "User has already registered") {
      toast.warning("Email Telah digunakan");
    } else if (error.response.data.message === "Password must be stronger") {
      toast.warning("Password harus lebih kuat");
    }
  }
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};
export { RegisterUser, useCreateUser };
