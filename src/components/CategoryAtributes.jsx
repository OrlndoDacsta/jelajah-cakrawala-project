
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

const CategoryAtributes = () => {
  const param = useParams();
  const [detailCategory, setDetailCategory] = useState({});

  const getDetailCategory = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/category/${param.id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setDetailCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getDetailCategory();
  }, []);

  return (
    <div className="flex items-center justify-center p-5 mt-5">
      <Card className="w-1/2 p-3 bg-gray-300 border shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-10">
        <CardHeader className="text-3xl font-bold">
          {detailCategory.name}
        </CardHeader>
        <CardContent>
          <img
            className="w-full h-[300px] object-cover"
            src={detailCategory.imageUrl}
            alt="imgPromo"
          />
          <CardDescription className="mt-3 text-lg font-semibold">
            Created: {detailCategory.createdAt}
          </CardDescription>
          <CardDescription className="mt-3 text-lg font-semibold">
            Upadted: {detailCategory.updatedAt}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryAtributes;
