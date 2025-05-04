import { Bell, ChevronDown, CircleUserRoundIcon, MessageCircleMoreIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProfileType } from "./NavbarProvider";
import { useNavbar } from "./NavbarProvider";

const ProfileInfo = () => {
    const { profile, setProfile } = useNavbar();


    const dropdownMap = {
        "user": ["verifier", "admin"],
        "admin": ["user", "verifier"],
        "verifier": ["user", "admin"]
    }

    return (
        <div className="flex flex-row items-center gap-4">
            <div className="relative">
                <Bell className="w-7 h-7 fill-green-600 stroke-green-600 cursor-pointer" />
                <span className="absolute -top-1 -right-1 bg-red-700 text-white text-[10px] font-bold px-1.5 rounded-full">
                4
                </span>
            </div>

            <MessageCircleMoreIcon className="w-8 h-8 fill-green-600 stroke-white cursor-pointer" />

            <CircleUserRoundIcon className="w-7 h-7 stroke-green-600 cursor-pointer" />

            <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer focus:outline-none">
                <div className="flex flex-row items-center gap-2 text-green-600 font-bold">
                    {profile.charAt(0).toUpperCase() + profile.slice(1)}
                    <ChevronDown className="w-4 h-4 stroke-green-600" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="text-green-700">Choose your Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                    className="cursor-pointer text-green-600 font-semibold"
                    onClick={() => setProfile(dropdownMap[profile][0] as ProfileType)}
                >
                    {dropdownMap[profile][0].charAt(0).toUpperCase() + dropdownMap[profile][0].slice(1)}
                </DropdownMenuItem>
                <DropdownMenuItem 
                    className="cursor-pointer text-green-600 font-semibold"
                    onClick={() => setProfile(dropdownMap[profile][1] as ProfileType)}
                >
                    {dropdownMap[profile][1].charAt(0).toUpperCase() + dropdownMap[profile][1].slice(1)}
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu> 
        </div>
    )
}

export default ProfileInfo;