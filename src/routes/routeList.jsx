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
import DetailBanner from "@/pages/Banner/DetailBanner";

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
    path: "/banner/:id",
    element: <DetailBanner />,
  },
];

export default routeList;
