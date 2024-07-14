import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonLogout from "../components/ButtonLogout";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import findPlace from "../assets/img/findPlace.png";
import userFriendly from "../assets/img/userFriendly.png";
import travelInspiration from "../assets/img/travelInspiration.png";
import { FaStar } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BannerHome from "@/components/BannerHome";
import PromoHome from "@/components/PromoHome";
import CategoryHome from "@/components/CategoryHome";
import ActivityHome from "@/components/ActivityHome";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto">
        <section className="flex items-center justify-center gap-2 p-5">
          <div className="flex flex-col w-1/2 gap-5">
            <h1 className="text-[40px] font-bold">
              Left your footsteps all over the world
            </h1>
            <p className="text-sm text-gray-500">
              Welcome to Jelajah Cakrawala, your ultimate travel companion for
              exploring the world with ease and convenience. Our mission is to
              make your travel planning seamless, enjoyable, and memorable by
              offering a comprehensive platform that caters to all your travel
              needs.
            </p>
            <Button className="w-24 bg-blue-700">Make Plan</Button>
          </div>
          <BannerHome />
        </section>

        <section className="flex flex-col items-center justify-center gap-5 p-5">
          <h1 className="text-3xl font-bold">Why Choose Us?</h1>
          <div className="flex items-center justify-center gap-5">
            <Card className="w-1/3 border-none">
              <CardContent className="flex flex-col items-center justify-center gap-2">
                <img src={findPlace} alt="findPlace" />
                <CardTitle className="text-2xl font-bold">Find Place</CardTitle>
                <CardDescription>
                  Find the best place to visit in your destination and holiday.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-1/3 border-none">
              <CardContent className="flex flex-col items-center justify-center gap-2">
                <img src={userFriendly} alt="findPlace" />
                <CardTitle className="text-2xl font-bold">
                  User Friendly
                </CardTitle>
                <CardDescription>
                  Our website and app are designed with you in mind, offering an
                  intuitive interface for easy navigation.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-1/3 border-none">
              <CardContent className="flex flex-col items-center justify-center gap-2">
                <img src={travelInspiration} alt="findPlace" />
                <CardTitle className="text-2xl font-bold">
                  Travel Inspiration
                </CardTitle>
                <CardDescription>
                  Stay updated with the latest travel trends, tips, and
                  destination recommendations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
        <PromoHome />
        <CategoryHome />
        <ActivityHome />
      </div>

      <Footer />
    </div>
  );
};
export default Home;
