import { Link } from "react-router-dom";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SideBar from "@/components/SideBar";
import ResponsiveSideBar from "@/components/ResponsiveSideBar";
import AvatarDashboard from "@/components/AvatarDashboard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge"
import LogoDashboard from "@/components/LogoDashboard";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  const getUsers = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex flex-col h-full max-h-screen gap-2">
            <LogoDashboard />
            <SideBar />
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <ResponsiveSideBar />
            <div className="flex-1 w-full">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full pl-8 shadow-none appearance-none bg-background md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div>
            <AvatarDashboard />
          </header>
          <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Data Users</h1>
            </div>
            <div
              className="flex flex-col flex-1 border border-dashed rounded-lg shadow-sm"
              x-chunk="dashboard-02-chunk-1"
            >
              <Table className="text-white bg-primary">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px] text-white">Profile Picture</TableHead>
                    <TableHead className="text-white">Email</TableHead>
                    <TableHead className="text-white">Phone Number</TableHead>
                    <TableHead className="text-white">Role</TableHead>
                    <TableHead className="text-white">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <img src={item.profilePictureUrl} alt="profilePicture" className="rounded-lg w-[100px] h-[100px] object-cover" />
                      </TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phoneNumber}</TableCell>
                      <TableCell><Badge className={`${item.role === "admin" ? "bg-blue-500" : "bg-red-500"}`}>{item.role}</Badge></TableCell>
                      <TableCell><Button variant="outline" className="w-16 text-primary hover:bg-muted-foreground">Update</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ReactPaginate
                className="flex justify-center gap-5 p-3 mx-auto mt-5 w-fit"
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
                activeClassName="text-white"
                pageClassName="text-muted-foreground"
                pageLinkClassName="bg-primary px-4 py-3 rounded-2xl text-center h-20"
                previousClassName="text-white"
                previousLinkClassName="bg-primary px-4 py-3 rounded-2xl text-center h-20"
                nextClassName="text-white"
                nextLinkClassName="bg-primary px-4 py-3 rounded-2xl text-center h-20"
                disabledClassName="text-muted-foreground"
                disabledLinkClassName="text-muted-foreground"
              />
            </div>
          </main>
        </div>
      </div>
  );
};
export default ListUser;
