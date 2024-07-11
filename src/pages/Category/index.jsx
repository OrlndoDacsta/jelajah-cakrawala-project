import Footer from "@/components/Footer";
import ListCategory from "@/components/ListCategory";
import Navbar from "@/components/Navbar";
import { BiSolidCategory } from "react-icons/bi";



const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center gap-3 p-2">
        <BiSolidCategory className="w-12 h-12" />
        <h1 className="text-3xl font-bold">List Category</h1>
      </div>
      <ListCategory />
      <Footer />
    </div>
  );
};

export default Category;
