import { Button } from "@/components/ui/button";
import logoHome from "../assets/img/logoHome.png";
import { Link } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        {isLoggedIn && (
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
        )}
      </div>

      <div className="flex gap-2">
        {isLoggedIn && (
          <DropdownMenu>
            <Avatar>
              <AvatarImage src={userInfo.user.profilePictureUrl} />
              <AvatarFallback className="text-xl text-primary">
                CN
              </AvatarFallback>
            </Avatar>
            <DropdownMenuTrigger className="px-3 py-1 mr-5 font-semibold text-black bg-blue-500 rounded-lg shadow-lg">
              {userInfo.user.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-blue-500">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link to="/profile">Profile</Link></DropdownMenuItem>
              <DropdownMenuItem>
                <ButtonLogout />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

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
    </nav>
  );
};

export default Navbar;
