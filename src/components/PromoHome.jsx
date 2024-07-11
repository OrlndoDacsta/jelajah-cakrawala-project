import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PromoHome = () => {
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
        // console.log(res.data.data);
        setPromo(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getPromo();
  }, []);

  return (
    <section className="w-3/4 mx-auto">
      <div className="flex flex-col items-center justify-center gap-10 p-5 bg-gray-300 border backdrop-filter backdrop-blur-md bg-opacity-10 rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Travel More, Save More</h1>
          <p className="text-gray-500">
            "With our exclusive discounts and offers, you can explore more of the
            world without worrying about your budget."
          </p>
        </div>

        <div className="flex w-3/4 space-x-16 overflow-hidden group">
          <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
            {promo.map((item) => (
              <Card
                className="w-[250px] hover:scale-105 duration-300 hover:bg-blue-300"
                key={item.id}
              >
                <CardContent className="flex flex-col items-center justify-center gap-2">
                  <CardTitle className="text-2xl font-bold">
                    {item.title}
                  </CardTitle>
                  <img
                    src={item.imageUrl}
                    alt="promoImg"
                    className="rounded-lg"
                  />
                  <div className="flex gap-2">
                    <CardDescription className="line-through">
                      Rp. {item.minimum_claim_price}
                    </CardDescription>
                    <CardDescription>
                      Rp. {item.promo_discount_price}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <div
            className="flex space-x-16 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            {promo.map((item) => {
              return (
                <Card
                  className=" w-[250px] hover:scale-105 duration-300 hover:bg-blue-300"
                  key={item.id}
                >
                  <CardContent className="flex flex-col items-center justify-center gap-2">
                    <CardTitle className="text-2xl font-bold">
                      {item.title}
                    </CardTitle>
                    <img
                      src={item.imageUrl}
                      alt="promoImg"
                      className="rounded-lg"
                    />
                    <div className="flex gap-2">
                      <CardDescription className="line-through">
                        Rp. {item.minimum_claim_price}
                      </CardDescription>
                      <CardDescription>
                        Rp. {item.promo_discount_price}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PromoHome;
