import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatRupiah } from "@/lib/utils";

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
    <div className="grid grid-cols-3 gap-5 p-5">
      {promo.map((item) => (
        <Link
          key={item.id}
          className="w-[350px] border shadow-2xl rounded-3xl bg-blue-800"
          to={`/promo/${item.id}`}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-3xl font-bold">{item.title}</div>
            <img
              className="w-full rounded-tl-xl rounded-tr-xl h-[200px] object-cover"
              src={item.imageUrl}
              alt="imgPromo"
            />
          </div>

          <div className="w-full bg-blue-800 rounded-b-3xl">
            <div className="flex flex-col">
              <p className="px-5 font-semibold">Discount Price:</p>
              <div className="flex justify-between px-5 pb-2">
                <p className="font-semibold line-through">
                  {formatRupiah(item.minimum_claim_price)}
                </p>
                <p className="font-semibold">
                  {" "}
                  {formatRupiah(item.promo_discount_price)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListPromo;
