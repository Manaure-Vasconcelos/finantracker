import {
  ChartNoAxesCombined,
  CirclePlus,
  HandCoins,
  House,
  TableOfContents,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "./ui/button";

function NavMobile() {
  return (
    <>
      <Outlet />

      <div className="fixed w-full bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between md:hidden">
        <Button variant={"ghost"}>
          <Link to={"/"}>
            <House size={20} />
          </Link>
        </Button>
        <Button variant={"ghost"}>
          <Link to={"transactions"}>
            <TableOfContents size={20} />
          </Link>
        </Button>
        <Button variant={"ghost"} className="bg-purple-600 p-3 rounded-full">
          <CirclePlus size={20} />
        </Button>
        <Button variant={"ghost"}>
          <Link to={"analytics"}>
            <ChartNoAxesCombined size={20} />
          </Link>
        </Button>
        <Button variant={"ghost"}>
          <Link to={"goals"}>
            <HandCoins size={20} />{" "}
          </Link>
        </Button>
      </div>
    </>
  );
}

export default NavMobile;
