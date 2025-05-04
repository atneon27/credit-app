import { Calendar, Settings, Users, FileText, Lock, PiggyBank, DollarSign, PenTool, Briefcase, LogOut, BarChart3, Scale, Calculator, RefreshCw, Banknote } from "lucide-react"

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
    url: "/under-construction",
    icon: Users,
  },
  {
    title: "Loans",
    url: "/under-construction",
    icon: Banknote,
  },
  {
    title: "Repayments",
    url: "/under-construction",
    icon: RefreshCw,
  },
  {
    title: "Loan Parameters",
    url: "/under-construction",
    icon: Scale,
  },
  {
    title: "Accounting",
    url: "/under-construction",
    icon: Calculator,
  },
  {
    title: "Reports",
    url: "/under-construction",
    icon: BarChart3,
  },
  {
    title: "Collateral",
    url: "/under-construction",
    icon: FileText,
  },
  {
    title: "Access Configuration",
    url: "/under-construction",
    icon: Lock,
  },
  {
    title: "Savings",
    url: "/under-construction",
    icon: PiggyBank,
  },
  {
    title: "Expenses",
    url: "/under-construction",
    icon: DollarSign,
  },
  {
    title: "E-signature",
    url: "/under-construction",
    icon: PenTool,
  },
  {
    title: "Investor Accounts",
    url: "/under-construction",
    icon: Briefcase,
  },
  {
    title: "Calendar",
    url: "/under-construction",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/under-construction",
    icon: Settings,
  },
  {
    title: "Sign Out",
    url: "/under-construction",
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

  return <Sidebar className="w-56 top-12 h-[calc(100vh-3rem)] fixed">
      <SidebarContent className="bg-green-1050 text-white h-full">
        <SidebarGroup>
          <div className="p-6 flex items-center gap-3 border-b border-green-1000 shadow-sm shadow-gray-950">
            <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-green-500">John Okoh</span>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="h-12 flex justify-center items-center shadow-sm shadow-gray-900 hover:bg-green-900" key={item.title}>
                  <SidebarMenuButton className="hover:bg-green-900 hover:text-white" asChild>
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
}

export default AppSidebar;