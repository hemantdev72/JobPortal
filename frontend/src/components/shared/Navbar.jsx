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
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

function Navbar() {
  const {user}=useSelector((store)=>store.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout=async ()=>{
    try{
        const response=await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true})
        if(response.data.success){
          dispatch(setUser(null))
          navigate("/")
          toast.success(response.data.message)
        }
    } catch(error){
      console.log(error)
      toast.error(error.response.data.message)
    }
    
  }

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to={"/browse"}>Browse</Link></li>
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
                            <Link to={"/profile"}><Button variant="link">User Profile</Button></Link>
                        </div>
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                             <LogOut />
                             <Button variant="link" onClick={handleLogout}>Logout</Button>   
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
