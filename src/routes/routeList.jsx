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
import Profile from "@/pages/Profile";
import { Dashboard } from "@/pages/dashboard";
import ListUser from "@/pages/dashboard/ListUser";
import BannerDashboard from "@/pages/dashboard/BannerDashboard";
import EditBannerDashboard from "@/pages/dashboard/BannerDashboard/EditBannerDashboard";
import CategryDashboard from "@/pages/dashboard/CategoryDashboard";
import UpdateCategory from "@/pages/dashboard/CategoryDashboard/UpdateCategory";
import PromoDashboard from "@/pages/dashboard/PromoDashboard";
import CreatePromo from "@/pages/dashboard/PromoDashboard/CreatePromo";
import UpdatePromo from "@/pages/dashboard/PromoDashboard/UpdatePromo";
import ActivityDashboard from "@/pages/dashboard/ActivityDashboard";
import CreateActivity from "@/pages/dashboard/ActivityDashboard/CreateActivity";

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
    path: "/dashboard/banner",
    element: <BannerDashboard />,
  },
  {
    path: "/dashboard/banner/edit-banner/:id",
    element: <EditBannerDashboard />,
  },
  {
    path: "/dashboard/category",
    element: <CategryDashboard />,
  },
  {
    path: "/dashboard/category/edit-category/:id",
    element: <UpdateCategory />,
  },
  {
    path: "/dashboard/promo",
    element: <PromoDashboard />,
  },
  {
    path: "/dashboard/promo/create-promo",
    element: <CreatePromo />,
  },
  {
    path: "/dashboard/promo/edit-promo/:id",
    element: <UpdatePromo />,
  },
  {
    path: "/dashboard/activity",
    element: <ActivityDashboard />,
  },
  {
    path: "/dashboard/activity/create-activity",
    element: <CreateActivity />,
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
];

export default routeList;
