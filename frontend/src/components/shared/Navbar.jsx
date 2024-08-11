import React from "react";
import '../../App.css'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2} from "lucide-react";
import {Link} from 'react-router-dom';

function Navbar() {
    const user=false;

  return (
    <div className="navbar sticky top-0 left-0">
      <div className="flex justify-between items-center mx-auto max-w-6xl h-16">
        <div>
          <h1 className="text-2xl text-black font-bold">
            Job <span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex justify-between items-center gap-16">
          <ul className="flex items-center font-medium gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          {user?<Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div>
                    <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div>
                <h4 className="font-medium">Hemant</h4>
                <p className="text-sm text-muted-foreground">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
                    </div>

                    <div className="flex flex-col my-2 text-gray-600">
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                            <User2 />
                            <Button variant="link">User Profile</Button>
                        </div>
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                             <LogOut />
                             <Button variant="link">Logout</Button>   
                        </div>
                    </div>
                </div>
            </PopoverContent>
          </Popover>: <div className="">
            <Link to="/login"><Button variant="outline" className="mr-2">Login</Button></Link>
            <Link to="/signup"><Button>Signup</Button></Link>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
