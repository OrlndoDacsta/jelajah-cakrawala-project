import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaUserCog } from "react-icons/fa";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="grid justify-center w-10/12 grid-cols-4 gap-10 mx-auto">
      {users.map((user) => (
        <div
          className="object-cover w-full border h-1/2 rounded-2xl aspect-square"
          key={user.id}
        >
          <img
            src={user.profilePictureUrl}
            alt="profilPicture"
            className="object-cover rounded-t-2xl aspect-square"
          />
          <div className="p-3 bg-blue-400 border border-t-4 border-blue-600 rounded-b-2xl">
            <div className="flex items-center justify-center gap-1">
              <RxAvatar />
              <h1 className="text-xl font-bold">{user.name}</h1>
            </div>
            <div className="flex items-center gap-1">
              <IoIosMail />
              <p>{user.email}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaPhoneAlt />
              <p>{user.phoneNumber}</p>
            </div>
            <div
              className={`w-8/12 mx-auto ${
                user.role === "admin" ? "bg-primary" : "bg-green-500"
              } rounded-lg py-1 flex items-center justify-center gap-1`}
            >
              <FaUserCog
                className={`text-${user.role === "admin" ? "white" : "black"}`}
              />
              <p
                className={`font-semibold text-center ${
                  user.role === "admin" ? "text-white" : "text-black"
                }`}
              >
                {user.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListUsers;
