import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { format } from "date-fns";
const BannerAtributes = () => {
  const param = useParams();
  const [detailBanner, setDetailBanner] = useState({});
  const getDetailBanner = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banner/${param.id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setDetailBanner(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getDetailBanner();
  }, []);

  return (
    <div className="flex items-center justify-center p-5 mt-5">
      <Card className="w-1/2 p-3 bg-gray-300 border shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-10">
        <CardHeader className="text-3xl font-bold text-center">
         <h1 className="mb-2">{detailBanner.name}</h1> 
          <CardContent>
            <img
              className="w-full h-[300px] object-cover"
              src={detailBanner.imageUrl}
              alt="imgPromo"
            />
          </CardContent>
        </CardHeader>
        <CardContent>
          <p>Created:{detailBanner.createdAt}</p>
          <p>Updated:{detailBanner.updatedAt}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BannerAtributes;
