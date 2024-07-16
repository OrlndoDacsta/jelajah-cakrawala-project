import path from "path";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Promo from "@/pages/Promo";
import Activity from "@/pages/Activity";
import DetailPromo from "@/pages/Promo/DetailPromo";
import DetailActivity from "@/pages/Activity/DetailActivity";
import Banner from "@/pages/Banner";
import Category from "@/pages/Category";
import DetailCategory from "@/pages/Category/DetailCategory";
import Profile from "@/pages/Profile";
import UpdateBanner from "@/pages/Banner/UpdateBanner";
import { Dashboard } from "@/pages/dashboard";
import ListUser from "@/pages/dashboard/ListUser";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/promo",
    element: <Promo />,
  },
  {
    path: "/banner",
    element: <Banner />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/activity",
    element: <Activity />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/user",
    element: <ListUser />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },  
  {
    path: "/promo/:id",
    element: <DetailPromo />,
  },
  {
    path: "/activity/:id",
    element: <DetailActivity />,
  },
  {
    path: "/category/:id",
    element: <DetailCategory />,
  },
  {
    path: "/banner/update-banner/:id",
    element: <UpdateBanner />,
  }
];

export default routeList;
