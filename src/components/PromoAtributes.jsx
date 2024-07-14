import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatRupiah } from "@/lib/utils";
import { format } from "date-fns";

const PromoAtributes = () => {
  const param = useParams();
  const [detailPromo, setDetailPromo] = useState({});

  const getDetailPromo = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${param.id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        // console.log(res);
        setDetailPromo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailPromo();
  }, []);

  return (
    <div className="flex items-center gap-5 p-10">
      <img
        className="object-cover w-1/2 rounded-t-full"
        src={detailPromo.imageUrl}
        alt="imgPromo"
      />
      <div className="w-1/2 p-5">
        <p className="mb-2 text-2xl font-semibold">{detailPromo.title}</p>
        <table className="w-full text-lg">
          <tr>
            <td>Description</td>
            <td>: {detailPromo.description}</td>
          </tr>
          <tr>
            <td>Promo Code</td>
            <td>: {detailPromo.promo_code}</td>
          </tr>
          <tr>
            <td>Minimum Claim Price</td>
            <td>: {formatRupiah(detailPromo.minimum_claim_price)}</td>
          </tr>
          <tr>
            <td>Discount Price</td>
            <td>: {formatRupiah(detailPromo.promo_discount_price)}</td>
          </tr>
          <tr>
            <td>Terms and Conditions</td>
            <td>: {detailPromo.terms_condition}</td>
          </tr>
          <tr>
            <td>Created at</td>
            <td>: {format(new Date(detailPromo.createdAt), "dd MMM yyyy")}</td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>: {format(new Date(detailPromo.updatedAt), "dd MMM yyyy")}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PromoAtributes;
