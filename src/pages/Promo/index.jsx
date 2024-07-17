import Navbar from "@/components/Navbar";
import promoImg from "../../assets/img/promo.jpg";
import Footer from "@/components/Footer";
import { RiDiscountPercentFill } from "react-icons/ri";
import ListPromo from "@/components/ListPromo";

const Promo = () => {
  return (
    <div>
      <Navbar />
      
      <div
        className="flex h-[500px] bg-cover justify-center items-center"
        style={{ backgroundImage: `url(${promoImg})` }}
      >
        <div className="p-2 text-center bg-gray-300 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-10">
          <h1 className="text-3xl font-bold text-primary">
            Travel More, Spend Less
          </h1>
          <h1 className="text-3xl font-bold text-primary">
            Incredible Deals on Long Stays!
          </h1>
        </div>
      </div>

      <div className="w-10/12 mx-auto mt-5">
        <div className="flex items-center w-7/12 gap-1">
          <RiDiscountPercentFill className="w-10 h-10 text-primary" />
          <p className="text-xl font-bold ">
            Extend your vacation without extending your budget. Check out our
            long-stay discounts.
          </p>
        </div>
        <ListPromo />
      </div>
      <Footer />
    </div>
  );
};

export default Promo;
