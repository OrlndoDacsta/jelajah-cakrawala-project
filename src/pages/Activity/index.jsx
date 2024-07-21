import Navbar from "@/components/Navbar";
import activityImg from "@/assets/img/activity.png";
import Footer from "@/components/Footer";
import ListActivity from "@/components/ListActivity";
import { MdLocalActivity } from "react-icons/md";

const Activity = () => {
  return (
    <div>
      <Navbar />
      <div
        className="flex h-[500px] bg-cover justify-center items-center"
        style={{ backgroundImage: `url(${activityImg})` }}
      >
        <div className="p-2 text-center bg-gray-300 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-10">
          <h1 className="text-3xl font-bold text-primary">Discover History</h1>
          <h1 className="text-3xl font-bold text-primary">
            Tours and Activities for History Buffs!
          </h1>
        </div>
      </div>

      <div className="w-10/12 mx-auto mt-5">
        <div className="flex items-center w-7/12 gap-1">
          <MdLocalActivity className="w-10 h-10 text-primary" />
          <p className="text-xl font-bold ">
            Adventures for All Ages – Fun Activities for Everyone!
          </p>
        </div>
        <ListActivity />
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
