import React, { useState } from "react";
import { RegisterUser, useCreateUser } from "../../services/auth/Register_User";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserr } from "../../redux/action/authRegister";

export const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const { mutate: Regis } = useCreateUser();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.regis);
  console.log(Data, "dataregister");

  const handleInput = (e) => {
    if (e) {
    }
    if (e.target.id === "name") {
      setname(e.target.value);
    }
    if (e.target.id === "email") {
      setemail(e.target.value);
    }
    if (e.target.id === "password") {
      setpassword(e.target.value);
    }
  };

  // if (error) {
  //   console.log(error.response.data.message);
  // }

  const showpass = () => {
    setShowPassword(!showPassword);
  };

  const registerUser = async () => {
    const success = await dispatch(
      RegisterUserr({
        name: name,
        email: email,
        password: password,
      })
    );
    if (success) {
      // navigate("/");
    }
  };
  // if (!name || !email || !password) {
  //   toast.warning("isi cok");
  // } else
  //   Regis({
  //     email: email,
  //     name: name,
  //     password: password,
  //   });
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black gap-2">
      <h1 className="text-2xl font-bold mb-2 text-white">Register</h1>
      <div className="w-1/4">
        <input id="name" onChange={handleInput} type="text" placeholder="Username" className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-blue-500" />
        <input id="email" onChange={handleInput} type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-blue-500" />
        <div className="relative">
          <input id="password" onChange={handleInput} type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-blue-500" />
          <span className="absolute right-3 top-3 cursor-pointer text-blue-500" onClick={showpass}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button
          className="w-full p-2 bg-red-500 text-white rounded-md"
          onClick={() => {
            registerUser();
          }}
        >
          Register
        </button>
      </div>
      <div className="bg-red-500 py-2 px-4 rounded-md pt-4">
        <span className="flex justify-center items-center text-white">
          Already have an account?
          <span
            className="px-2 cursor-pointer underline underline-offset-2 font-bold"
            onClick={() => {
              navigate("/");
            }}
          >
            Sign In
          </span>
        </span>
      </div>
    </div>
  );
};
