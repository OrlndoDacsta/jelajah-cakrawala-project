import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { formatRupiah } from "@/lib/utils";

const ActivityAtributes = () => {
  const param = useParams();
  const [detailActivity, setDetailActivity] = useState({});

  const getDetailActivity = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activity/${param.id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setDetailActivity(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailActivity();
  }, []);

  return (
    <div>
      <div className="flex flex-col mt-5 font-semibold mb-36">
        <p className="mb-2 text-2xl font-bold text-center">
          {detailActivity.title}
        </p>
        <img
          className="object-cover w-3/4 mx-auto h-[400px] rounded-2xl"
          src={detailActivity.imageUrls}
          alt="imgPromo"
        />
        <div className="absolute flex w-4/6 p-3 mx-auto -translate-x-1/2 bg-gray-300 bg-opacity-25 backdrop-filter backdrop-blur-md top-3/4 left-1/2 rounded-xl">
          <table className="w-full text-lg">
            <tr>
              <td className="font-semibold">Location</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>: {detailActivity.address}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>: {detailActivity.city}</td>
            </tr>
            <tr>
              <td>Province</td>
              <td>: {detailActivity.province}</td>
            </tr>
          </table>

          <table className="w-full text-lg">
            <tr>
              <td className="font-semibold">Detail Information</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>: {detailActivity.description}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>: {formatRupiah(detailActivity.price)}</td>
            </tr>
            <tr>
              <td>Promo Price</td>
              <td>: {formatRupiah(detailActivity.price_discount)}</td>
            </tr>
            <tr>
              <td>Facilities</td>
              <td>: {detailActivity.facilities}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td className="flex items-center gap-1">
                : <FaStar className="text-yellow-500" /> {detailActivity.rating}{" "}
                ({detailActivity.total_reviews} reviews)
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityAtributes;
