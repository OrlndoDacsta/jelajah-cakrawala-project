import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ListCategory = () => {
  const [category, setCategory] = useState([]);

  const getCategory = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
        toast({
          title: "Error",
          description: err.response.data.message,
          variant: "destructive",
        });
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="grid w-10/12 grid-cols-3 gap-10 p-5 mx-auto">
      {category.map((item) => (
        <div
          key={item.id}
          className="w-[350px] border shadow-2xl rounded-3xl"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                {item.name}
              </CardTitle>
              <CardDescription>
                  <img
                    src={item.imageUrl}
                    alt="imgPromo"
                    className="w-full rounded-tl-xl rounded-tr-xl h-[200px] object-cover"
                  />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="font-bold">Created: </span>
                {format(new Date(item.createdAt), "eee, dd MMM yyyy")}
              </p>
              <p>
                <span className="font-bold">Updated: </span>
                {format(new Date(item.updatedAt), "eee, dd MMM yyyy")}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ListCategory;
