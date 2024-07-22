import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import SideBar from "@/components/SideBar";
import ResponsiveSideBar from "@/components/ResponsiveSideBar";
import AvatarDashboard from "@/components/AvatarDashboard";
import CreateCategory from "@/pages/Category/CreateCategory";
import ListCategoryDashboard from "@/components/ListCategoryDashboard";
import LogoDashboard from "@/components/LogoDashboard";
import ListPromoDashboard from "@/components/ListPromoDashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateActivityDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [priceDiscount, setPriceDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [totalReviews, setTotalReviews] = useState("");
  const [facilities, setFacilities] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [locationMaps, setLocationMaps] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file.type.startsWith("image")) {
      toast({
        description: "File Format Not Supported",
        variant: "destructive",
      });
      setTimeout(() => {
        alert(null);
        e.target.value = null;
      }, 2000);
      return false;
    }
    const formData = new FormData();
    formData.append("image", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
      },
    };

    try {
      const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        formData,
        config
      );
      //   console.log(res);
      setImageUrls(res.data.url);
      toast({ description: res.data.message, variant: "success" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlePriceDiscountChange = (event) => {
    setPriceDiscount(event.target.value);
  };

  const handleTotalReviewsChange = (event) => {
    setTotalReviews(event.target.value);
  };

  const handleFacilitiesChange = (event) => {
    setFacilities(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleLocationMapsChange = (event) => {
    setLocationMaps(event.target.value);
  };

  const handleCategoryIdChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const getCategory = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        setAllCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleCreate = () => {
    const payload = {
      title: title,
      description: description,
      price: parseInt(price),
      price_discount: parseInt(priceDiscount),
      total_reviews: parseInt(totalReviews),
      facilities: facilities,
      address: address,
      province: province,
      city: city,
      location_maps: locationMaps,
      categoryId: categoryId,
      image_url: imageUrls,
      rating: parseInt(rating),
    };

    const config = {
      headers: {
        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k",
      },
    };

    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-activity",
        payload,
        config
      )
      .then((res) => {
        // console.log(res);
        toast({ description: res.data.message, variant: "success" });
        navigate("/dashboard/activity");
      })
      .catch((err) => {
        console.log(err);
        toast({
          description: err.response.data.message,
          variant: "destructive",
        });
      });
  };

  return (
    <div className="w-10/12 p-5">
      <div>
        <Card>
          <CardContent className="p-5">
            <div className="flex gap-10">
              <section className="w-1/2">
                <div>
                  <Label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      id="title"
                      placeholder="Title"
                      onChange={handleTitleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="description"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </Label>
                  <div className="mt-2">
                    <Textarea
                      type="text"
                      id="description"
                      onChange={handleDescriptionChange}
                      placeholder="Description promo"
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="categoryid"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </Label>
                  <div className="mt-2">
                    <Select id="categoryid">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          {allCategory.map((category) => (
                            <SelectItem
                              onChange={handleCategoryIdChange}
                              key={category.id}
                              value={category.name}
                            >
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="price"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      id="price"
                      placeholder="Price"
                      onChange={handlePriceChange}
                    />
                  </div>
                </div>
              </section>
              <section className="w-1/2">
                <div>
                  <Label
                    htmlFor="priceDiscount"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price Discount
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      id="priceDiscount"
                      placeholder="ex. 100000"
                      onChange={handlePriceDiscountChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="promoDiscount"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Rating
                  </Label>
                  <div className="mt-2">
                    <Select id="categoryid">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Give Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Rating</SelectLabel>
                          <SelectItem onChange={handleRatingChange} value="1">
                            1
                          </SelectItem>
                          <SelectItem onChange={handleRatingChange} value="2">
                            2
                          </SelectItem>
                          <SelectItem onChange={handleRatingChange} value="3">
                            3
                          </SelectItem>
                          <SelectItem onChange={handleRatingChange} value="4">
                            4
                          </SelectItem>
                          <SelectItem onChange={handleRatingChange} value="5">
                            5
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="totalReview"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Total Review
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      id="totalReview"
                      placeholder="Total Review"
                      onChange={handleTotalReviewsChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="facilities"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Facilities
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      id="facilities"
                      placeholder="Facilities"
                      onChange={handleFacilitiesChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="address"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </Label>
                  <div className="mt-2">
                    <Textarea
                      type="text"
                      id="address"
                      placeholder="Address"
                      onChange={handleAddressChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="province"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Province
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      id="province"
                      placeholder="Province"
                      onChange={handleProvinceChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="city"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      id="city"
                      placeholder="City"
                      onChange={handleCityChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="location"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Location
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      id="location"
                      placeholder="Location"
                      onChange={handleLocationMapsChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="image"
                    className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                  >
                    Image
                  </Label>
                  <div className="mt-2">
                    <Input type="file" id="image" onChange={handleUpload} />
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-5">
            <Button className="w-full" onClick={handleCreate}>
              Create
            </Button>
            <Button
              className="w-full"
              variant="destructive"
              onClick={() => navigate("/dashboard/activity")}
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CreateActivityDashboard;
