import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const DetailProfile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const isLogin = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="flex flex-col items-center justify-center w-1/2 gap-10 p-5 mx-auto mt-10 rounded-2xl bg-slate-400">
      <h1 className="text-3xl font-bold">My Profile</h1>
      {isLogin ? (
        <div>
          <div className="leading-8">
            <img
              src={userInfo.user.profilePictureUrl}
              alt="profilePicture"
              className="object-cover w-1/2 mx-auto mb-5 rounded-full"
            />
            <h1 className="mb-5 text-3xl font-bold text-center">
              {userInfo.user.name}
            </h1>
            <p className="text-xl font-semibold">
              Email : {userInfo.user.email}
            </p>
            <p className="text-xl font-semibold">
              Phone : {userInfo.user.phoneNumber}
            </p>
            <p className="text-xl font-semibold">Role : {userInfo.user.role}</p>
          </div>
          <EditProfile />
        </div>
      ) : (
        <h1>Loading !!!</h1>
      )}
    </div>
  );
};

export default DetailProfile;
