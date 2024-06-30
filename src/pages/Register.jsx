import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  // const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // console.log(event);
    setPassword(event.target.value);
  };

  const handlePasswordRepeatChange = (event) => {
    setPasswordRepeat(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
      },
    };

    try {
      const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        formData,
        config
      );
      console.log(res);
      setFile(res.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    const payload = {
      email: email,
      name: name,
      password: password,
      passwordRepeat: passwordRepeat,
      profilePictureUrl: file,
      phoneNumber: phoneNumber,
      role: role,
    };

    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register",
        payload,
        { headers: { apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c" } }
      )
      .then((res) => {
        console.log(res);
        // setToken(res.data.token);

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <div className="content-center bg-emerald-900 sm:h-screen">
        <div className="flex max-sm:flex-col">
          <div className="flex flex-col items-center justify-center gap-5 w-110 max-sm:w-full">
            <h1 className="mb-5 text-3xl font-bold text-white max-sm:text-2xl max-sm:mb-0 max-sm:text-center max-sm:p-2">
              Create Your Account
            </h1>

            <div>
              <div className="mb-2">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
              </div>

              <div className="flex mb-5">
                <input
                  className="p-3 text-white transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500 max-sm:w-60"
                  onChange={handleEmailChange}
                  placeholder="Email"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="email" className="text-white">
                  Username
                </label>
              </div>

              <div className="flex mb-5">
                <input
                  className="p-3 text-white transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500 max-sm:w-60"
                  onChange={handleNameChange}
                  placeholder="Email"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="text-white ">
                  Password
                </label>
              </div>

              <div className="flex mb-5">
                <input
                  className="p-3 text-white transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500 max-sm:w-60"
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="text-white ">
                  Confirm Password
                </label>
              </div>

              <div className="flex mb-5">
                <input
                  className="p-3 text-white transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500 max-sm:w-60"
                  onChange={handlePasswordRepeatChange}
                  placeholder="Password"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="text-white ">
                  Select Role
                </label>
              </div>

              <div className="flex mb-5">
                <select name="role" onChange={handleRoleChange}>
                  <option value="-">-</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="text-white ">
                  Phone Number
                </label>
              </div>

              <div className="flex mb-5">
                <input
                  className="p-3 text-white transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500 max-sm:w-60"
                  onChange={handlePhoneNumberChange}
                  placeholder="Password"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="text-white ">
                  Profile Picture
                </label>
              </div>

              <div className="flex mb-5">
                <input
                  className="p-3 text-white transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500 max-sm:w-60"
                  onChange={handleFileChange}
                  placeholder="Your Photo Profile"
                  type="file"
                />
                <button onClick={handleUpload}>Upload</button>
              </div>

              <button
                className="w-full py-2 text-xl font-bold duration-300 ease-out transform bg-yellow-500 rounded-xl text-emerald-900 hover:rounded-sm hover:bg-yellow-400 hover:text-white"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
            <p className="text-white max-sm:p-2">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
