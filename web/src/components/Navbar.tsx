import { useNavbar } from "./NavbarProvider";
import { SidebarTrigger } from "./ui/sidebar";  
import ProfileInfo from "./ProfileInfo";
import UserOptions from "./UserOptions";

const Navbar = () => {
    const { profile } = useNavbar();

    return (
        <div className="h-12 flex justify-between items-center px-2 shadow-md shadow-gray-300">
            <div className="text-xl font-bold text-green-800 flex flex-row items-center gap-2">
                CREDIT APP
                {profile !== "user" && <SidebarTrigger size="lg" className="cursor-pointer" />}
            </div>


            {profile === "user" && <UserOptions />}

            <ProfileInfo />
        </div>
    );
}

export default Navbar;