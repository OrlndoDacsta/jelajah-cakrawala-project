import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const DetailProfile = () => {
  const [profile, setProfile] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);

  const getProfile = () => {
    axios
      .get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user", {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${userInfo.token ?? ""}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setProfile(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-1/2 gap-10 p-5 mx-auto mt-10 rounded-2xl bg-slate-400">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <div className="leading-8">
        <img
          src={profile.profilePictureUrl}
          alt="profilePicture"
          className="object-cover w-1/2 mx-auto mb-5 rounded-full"
        />
        <h1 className="mb-5 text-3xl font-bold text-center">
          {profile.name}
        </h1>
        <p className="text-xl font-semibold">Email : {profile.email}</p>
        <p className="text-xl font-semibold">Phone : {profile.phoneNumber}</p>
        <p className="text-xl font-semibold">Role : {profile.role}</p>
      </div>
      {/* <Button className="w-1/3">Edit Profile</Button> */}
      <EditProfile />
    </div>
  );
};

export default DetailProfile;
