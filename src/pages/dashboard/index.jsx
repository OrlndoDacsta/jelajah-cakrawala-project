import Navbar from "@/components/Navbar";
import { FaUsers } from "react-icons/fa";
import ListUsers from "@/components/ListUsers";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-center justify-center gap-3 p-2 mb-10">
          <FaUsers className="w-12 h-12" />
          <h1 className="text-3xl font-bold">List Users</h1>
        </div>
        <ListUsers />
      </div>
    </div>
  );
};

export default Dashboard;
