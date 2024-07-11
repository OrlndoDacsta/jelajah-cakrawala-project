import React from "react";
import imgRegister from "../assets/img/imgRegister.png";
import FormRegister from "../components/FormRegister";

const Register = () => {
  return (
    <div>
      <div className="content-center p-5 sm:h-screen">
        <div className="flex items-center justify-center gap-10 max-sm:flex-col">
          <img src={imgRegister} alt="imgRegister" />
          <FormRegister />
        </div>
      </div>
    </div>
  );
};
export default Register;
