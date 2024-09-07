import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function AvatarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-auto w-auto p-0 rounded-full">
          <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="profile"
              className="rounded-full"
            />
            <AvatarFallback>MV</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-around">
          Profile <User size={20} className='ml-3'/>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-around">
          Settings <Settings size={20} />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-around">
          Log Out <LogOut size={20} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AvatarMenu;
