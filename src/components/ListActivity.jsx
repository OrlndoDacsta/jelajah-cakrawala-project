import axios from "axios";
import { useEffect, useState } from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ListActivity = () => {
  const [activity, setActivity] = useState([]);

  const getActivity = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setActivity(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {activity.map((item) => (
        <Link
          key={item.id}
          className="w-[350px] border shadow-2xl rounded-3xl bg-blue-800"
          to={`/activity/${item.id}`}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-3xl font-bold">{item.title}</div>
            <img
              className="w-full rounded-tl-xl rounded-tr-xl h-[200px] object-cover"
              src={item.imageUrls}
              alt="imgPromo"
            />
          </div>

          <div className="w-full bg-blue-800 rounded-b-3xl">
            <div className="flex items-center gap-1 p-3">
              <RiMapPin2Fill className="text-yellow-500" />
              <p className="font-semibold">
                {item.city}, {item.province}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListActivity;
