import Footer from "@/components/Footer";
import ListBanner from "@/components/ListBanner";
import Navbar from "@/components/Navbar";
import { MdOutlinePictureInPicture } from "react-icons/md";
import CreateBanner from "./CreateBanner";


const Banner = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center gap-3 p-2">
        <MdOutlinePictureInPicture className="w-12 h-12" />
        <h1 className="text-3xl font-bold">List Banner</h1>
      </div>
      <ListBanner />
      <Footer />
    </div>
  );
};

export default Banner;
