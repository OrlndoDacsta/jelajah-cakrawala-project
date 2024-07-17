import axios from "axios";
import { useEffect, useState } from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <Link key={item.id} className="w-[350px] border shadow-2xl rounded-3xl" to={`/activity/${item.id}`}>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <img
                  src={item.imageUrls}
                  alt="imgPromo"
                  className="w-full rounded-tl-xl rounded-tr-xl h-[200px] object-cover"
                />
              </CardDescription>
              <div className="flex items-center gap-1 p-3">
                <RiMapPin2Fill className="text-yellow-500" />
                <p className="font-semibold">
                  {item.city}, {item.province}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ListActivity;
