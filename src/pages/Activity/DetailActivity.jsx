import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivityAtributes from "@/components/ActivityAtributes";

const DetailActivity = () => {

  return (
    <div>
      <Navbar />
      <h1 className="mt-5 text-3xl font-bold text-center">
        Detail Information Activity
      </h1>
      <ActivityAtributes />
      <Footer />
    </div>
  );
};

export default DetailActivity;
