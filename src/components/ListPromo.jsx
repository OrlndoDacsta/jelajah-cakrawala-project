import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatRupiah } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ListPromo = () => {
  const [promo, setPromo] = useState([]);

  const getPromo = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        // console.log(res);
        setPromo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPromo();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10 p-5">
        {promo.map((item) => (
          <Link
            key={item.id}
            className="w-[340px] border shadow-2xl rounded-3xl"
            to={`/promo/${item.id}`}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                  {item.title}
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
                  {formatRupiah(item.minimum_claim_price)}
                </p>
                <p>
                  <span className="font-bold">Updated: </span>
                  {formatRupiah(item.promo_discount_price)}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
  );
};

export default ListPromo;
