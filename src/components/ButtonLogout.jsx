import axios from "axios";
import { useNavigate } from "react-router-dom";

const ButtonLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios
          .get(
            "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout",
            {
              headers: {
                apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
              },
            }
          )
          .then((res) => {
            localStorage.removeItem("access_token");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
    return (
        <div>
            <button onClick={handleLogout} className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
                Logout
            </button>
        </div>
    );
};
export default ButtonLogout;