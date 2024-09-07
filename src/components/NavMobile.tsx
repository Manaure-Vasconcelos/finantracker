import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChartNoAxesCombined, CirclePlus, HandCoins, House, TableOfContents } from "lucide-react";

function NavMobile() {
  return (
    <div className="fixed w-full bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between md:hidden">
      <Button variant={"ghost"}>
        <Link to={"/"}>
          <House size={25} />
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <Link to={"transactions"}>
          <TableOfContents size={25} />
        </Link>
      </Button>
      <Button variant={"default"} className="p-4 rounded-full">
        <CirclePlus size={30} />
      </Button>
      <Button variant={"ghost"}>
        <Link to={"analytics"}>
          <ChartNoAxesCombined size={25} />
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <Link to={"goals"}>
          <HandCoins size={25} />
        </Link>
      </Button>
    </div>
  );
}

export default NavMobile;
