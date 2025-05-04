import { useNavbar } from "./NavbarProvider";
import { Button } from "@/components/ui/button";
import ProfileInfo from "./ProfileInfo";
import UserOptions from "./UserOptions";
import { Menu } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

const Navbar = () => {
    const { profile } = useNavbar();
    const { open, setOpen } = useSidebar();

    return (
        <div className="h-[70px] flex justify-between items-center px-2 shadow-md shadow-gray-300 bg-white">
            <div className="text-xl font-bold text-green-800 flex flex-row items-center gap-2">
                CREDIT APP
                {profile !== "user" && <Button variant={"custom"} onClick={() => setOpen(!open)} className="h-full">
                    <Menu className="w-full h-full stroke-green-600 stroke-3"/>    
                </Button>}
            </div>


            {profile === "user" && <UserOptions />}

            <ProfileInfo />
        </div>
    );
}

export default Navbar;