import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonLogout from "../components/ButtonLogout";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ButtonLogout />
    </div>
  );
};
export default Home;
