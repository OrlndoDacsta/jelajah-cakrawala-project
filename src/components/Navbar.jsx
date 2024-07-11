import { Button } from "@/components/ui/button";
import logoHome from "../assets/img/logoHome.png";
import { Link } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <nav className="flex items-center justify-between bg-gray-300 border backdrop-filter backdrop-blur-md bg-opacity-10">
      <img className="w-20 pl-3" src={logoHome} alt="logoHome" />
      <div className="flex gap-10">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/activity">
          <p>Activity</p>
        </Link>
        <Link to="/promo">
          <p>Promo</p>
        </Link>
      </div>

      {isLoggedIn && (
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src={userInfo.user.profilePictureUrl} />
            <AvatarFallback className="text-xl text-primary">CN</AvatarFallback>
          </Avatar>
          <p>{userInfo.user.name}</p>
        </div>
      )}

      {!isLoggedIn && (
        <div className="flex gap-2">
          <Link to="/login">
            <Button className="w-24 hover:bg-blue-700">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="w-24 mr-3 hover:bg-blue-700">Register</Button>
          </Link>
        </div>
      )}
      {isLoggedIn && <ButtonLogout />}
    </nav>
  );
};

export default Navbar;
