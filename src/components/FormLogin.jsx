import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/userSlice";

const FormLogin = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [showpassword, setShowpassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // console.log(event);
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowpassword(!showpassword);
  };

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login",
        payload,
        { headers: { apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c" } }
      )
      .then((res) => {
        // console.log(res);
        setToken(res.data.token);

        dispatch(
          login({
            user: res.data.data,
            token: res.data.token,
          })
        );

        if (res.data.code === "200") {
          toast({
            title: "Success",
            description: res.data.message,
            variant: "success",
          });
        }

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.message);
        // alert(err.response.data.message);
        toast({
          title: "Error",
          description: err.response.data.message,
          variant: "destructive",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Email Or Password Is Cannot Be Empty",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 p-5 border shadow-2xl w-110 max-sm:w-full rounded-3xl">
      <p className="text-sm text-gray-500">Welcome to Jelajah Cakrawala</p>
      <h1 className="text-3xl font-bold">Login with</h1>
      <div>
        <div className="mb-2">
          <label htmlFor="email" className="text-gray-500">
            Email
          </label>
        </div>

        <div className="flex items-center justify-center mb-5">
          <MdEmail className="text-gray-500" />
          <input
            className="p-3 text-black transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-blue-500 max-sm:w-60"
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="text-gray-500">
            Password
          </label>
        </div>

        <div className="flex items-center justify-center">
          <FaLock className="text-gray-500" />
          <input
            className="p-3 text-black transition-colors duration-300 ease-linear delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-blue-500 max-sm:w-60"
            onChange={handlePasswordChange}
            placeholder="Password"
            type={showpassword ? "text" : "password"}
          />
        </div>

        <div className="flex items-center gap-1 mt-2 mb-5">
          <input type="checkbox" className="w-5" onClick={handleShowPassword} />
          <label className="text-xs text-gray-500">Show Password</label>
        </div>

        <button
          className="w-full py-2 text-xl font-bold text-white duration-300 ease-out transform bg-blue-500 rounded-xl hover:rounded-sm hover:bg-blue-800 hover:shadow-2xl hover:-translate-y-1"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
      <p className="text-center text-gray-500 max-sm:p-2">
        Don't have an account?{" "}
        <Link to="/register" className="text-gray-500 hover:text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default FormLogin;
