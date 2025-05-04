import { Calendar, Settings, Users, FileText, Lock, PiggyBank, DollarSign, PenTool, Briefcase, LogOut, BarChart3, Scale, Calculator, RefreshCw, Banknote, UserRoundIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useNavbar } from "./NavbarProvider";
import { useEffect } from "react";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Borrowers",
    url: "#",
    icon: Users,
  },
  {
    title: "Loans",
    url: "#",
    icon: Banknote,
  },
  {
    title: "Repayments",
    url: "#",
    icon: RefreshCw,
  },
  {
    title: "Loan Parameters",
    url: "#",
    icon: Scale,
  },
  {
    title: "Accounting",
    url: "#",
    icon: Calculator,
  },
  {
    title: "Reports",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Collateral",
    url: "#",
    icon: FileText,
  },
  {
    title: "Access Configuration",
    url: "#",
    icon: Lock,
  },
  {
    title: "Savings",
    url: "#",
    icon: PiggyBank,
  },
  {
    title: "Expenses",
    url: "#",
    icon: DollarSign,
  },
  {
    title: "E-signature",
    url: "#",
    icon: PenTool,
  },
  {
    title: "Investor Accounts",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Sign Out",
    url: "#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const { profile } = useNavbar();
  const { setOpen } = useSidebar();

  useEffect(() => {
    if(profile === "user") {
      setOpen(false)
    }
  }, [profile])

  return (
    <Sidebar className="w-[230px] top-[70px] h-[calc(100vh-3rem)] fixed">
      <SidebarContent className="bg-green-700 text-white h-full">
        <SidebarGroup>
          <div className="p-6 flex items-center gap-3 border-b border-green-700 shadow-md shadow-gray-900">
            <div className="bg-green-400 rounded-full w-8 h-8 flex items-center justify-center">
              <UserRoundIcon className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-green-400">John Okoh</span>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="h-12 flex justify-center items-center shadow-sm shadow-gray-900 hover:bg-green-600" key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="hover:bg-green-600 hover:opacity-[91%] hover:text-white focus:outline-none focus:ring-0 active:bg-green-600 active:opacity-[91%] active:text-white"
                  >
                    <a href={item.url} className="flex items-center gap-3 text-white">
                      <item.icon className="h-5 w-5" />
                      <span className="font-semibold text-md">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar;