import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format, compareAsc } from "date-fns";

const ListBanner = () => {
  const [banner, setBanner] = useState([]);

  const getBanner = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setBanner(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {banner.map((item) => (
        <Link
          key={item.id}
          className="w-[350px] border shadow-2xl rounded-3xl bg-blue-800"
          to={`/banner/${item.id}`}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-3xl font-bold">{item.name}</div>
            <img
              className="w-full rounded-tl-xl rounded-tr-xl h-[200px] object-cover"
              src={item.imageUrl}
              alt="imgPromo"
            />
          </div>

          <div className="w-full p-3 bg-blue-800 rounded-b-3xl">
            <ul>
              <li>
                <b>Created:</b>{" "}
                {format(new Date(item.createdAt), "eee, dd MMM yyyy")}
              </li>
              <li>
                <b>Update:</b>{" "}
                {format(new Date(item.updatedAt), "eee, dd MMM yyyy")}
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListBanner;
