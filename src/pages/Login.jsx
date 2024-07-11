import React from "react";
import imgLogin from "../assets/img/imgLogin.png";
import FormLogin from "../components/FormLogin";


const Login = () => {
  
  return (
    <div className="content-center sm:h-screen">
      <div className="flex items-center justify-center gap-10 max-sm:flex-col">
        <img src={imgLogin} alt="imgLogin" />
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
