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
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const SideBar = () => {
  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
        >
          <Users className="w-4 h-4" />
          User
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
        >
          <ShoppingCart className="w-4 h-4" />
          Orders
          <Badge className="flex items-center justify-center w-6 h-6 ml-auto rounded-full shrink-0">
            6
          </Badge>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
        >
          <Package className="w-4 h-4" />
          Products{" "}
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
        >
          <Users className="w-4 h-4" />
          Customers
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
        >
          <LineChart className="w-4 h-4" />
          Analytics
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
