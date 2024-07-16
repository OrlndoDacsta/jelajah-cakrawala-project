import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

const ListBanner = () => {
  const [banner, setBanner] = useState([]);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

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
        toast({
          title: "Error",
          description: err.response.data.message,
          variant: "destructive",
        });
      });
  };

  const handleDelete = (id) => {
    setIsLoading(true);
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
          },
        }
      )
      .then((res) => {
        // console.log(res);

        if (res.data.code === "200") {
          setBanner((prevItems) => prevItems.filter((item) => item.id !== id));
          toast({ description: res.data.message, variant: "destructive" });
        }
      })
      .catch((err) => {
        console.log(err.response);
        toast({
          description: err.response.data.message,
          variant: "destructive",
        });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getBanner();
  }, []);
  console.log(banner);
  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {banner.map((item) => (
        <div key={item.id} className="w-[400px] border shadow-2xl rounded-3xl">
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
            <CardFooter className="flex justify-between">
              {/* Edit */}
              <Link to={`/banner/update-banner/${item.id}`}>
                <Button variant="outline" className="text-white bg-primary">
                  Update
                </Button>
              </Link>

              {/* Delete */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button disabled={isLoading} variant="destructive">
                    {isLoading ? "Loading..." : "Delete"}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure delete this banner?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(item.id)}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ListBanner;
