import { useState, useContext, createContext } from "react";

export type ProfileType = "user" | "admin" | "verifier";
export type NavbarContextType = {
    profile: ProfileType,  
    setProfile: (profile: ProfileType) => void
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

const NavbarProvider = ({children}: React.PropsWithChildren) => {
    const [profile, setProfile] = useState<ProfileType>("user")

    return (
        <NavbarContext.Provider value={{ profile, setProfile }}>
            {children}
        </NavbarContext.Provider>
    )
}

export const useNavbar = () => {
    const context = useContext(NavbarContext);
    if (context === undefined) {
        throw new Error('useNavbar must be used within a NavbarProvider');
    }
    return context;
}

export default NavbarProvider;