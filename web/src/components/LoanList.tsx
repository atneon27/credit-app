import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Avatar from "react-avatar"
import { ProfileType, useNavbar } from "./NavbarProvider";
import { format, formatDistanceToNow } from 'date-fns'
import OptionsDialog from "./OptionsDialog";
import { LoaderCircle } from "lucide-react";

type LoanUserList = {
  id: number;
  user?: {
    name: string;
  },
  officer?: {
    name: string;
  };
  loanAmount: number;
  currentStatus: string;
  createdAt: string;
  feedback?: string;
  feedbackRaisedAt?: string;
}

type UserAvatarProps = {
  loan: LoanUserList;
  profile: ProfileType;
}

const UserAvatarAndInfo = ({ loan, profile }: UserAvatarProps) => {
  if (profile === "user") {
    return (
      <div className="flex flex-row items-center gap-5">
        <Avatar size="44px" name={loan.officer?.name} round color="grey" />
        <div className="flex flex-col">
          <div className="text-sm font-semibold">{loan.officer?.name || "Unknown"}</div>
          <div className="text-xs text-gray-400">{formatDistanceToNow(new Date(loan.createdAt))}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row items-center gap-5">
        <Avatar size="44px" name={loan.user?.name} round color="grey" />
        <div className="flex flex-col">
          <div className="text-sm font-semibold">{loan.feedback || "No feedback"}</div>
          <div className="text-xs text-gray-400">{formatDistanceToNow(new Date(loan.createdAt))}</div>
        </div>
      </div>
    );
  }
}

const LoanStatus = ({ currentStatus }: { currentStatus: string }) => {
  const stats: Record<string, { color: string, text: string }> = {
    "pending": {
      "color": "#FEC400",
      text: "Pending"
    },
    "verified": {
      color: "#29CC97",
      text: "Verified"
    }, 
    "rejected": {
      color: "#CC2929",
      text: "Rejected"
    }, 
    "approved": {
      color: "#1829C7",
      text: "Approved"
    }
  }

  return (
    <div className="flex justify-center">
      <div style={{backgroundColor: stats[currentStatus].color}} className={`px-3 py-2 w-fit rounded-full text-white flex items-center justify-center font-semibold`}>
        {stats[currentStatus].text}
      </div>
    </div>
  )
}

const DisplayDate = ({ date }: { date: string }) => {
  const dateObj = new Date(date);
  const formatedDate = format(dateObj, "MMMM d,yyyy-hh:mm a").split("-");

  return (
    <div className="flex flex-col">
      <div className="text-md" style={{fontWeight: 400}}>
        {formatedDate[0]}
      </div>
      <div className="text-xs text-gray-400 font-semibold pr-5">
        {formatedDate[1]} 
      </div>
    </div>
  )
}

const LoanList = () => {
  const { profile } = useNavbar();
  
  const { data, isLoading } = useQuery({
    queryKey: ["loanList"],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}/api/loan?userType=${profile}`,
      });

      return response.data
    },
    refetchInterval: 5000
  });

  if(isLoading) {
    return (
      <div className="flex felx-row justify-center items-center gap-2">
        <LoaderCircle className="h-5 w-5 animate-spin text-muted-foreground" />
        Loading ...
      </div>
    )
  }

  const loans = (data as any)?.loans || [];
  
  return (
    <Table className="bg-white">
      <TableHeader>
            {profile === 'user' ? (
              <TableRow>
                <TableHead className="w-[390px] text-gray-500 font-semibold pl-8">Loan Officer</TableHead>
                <TableHead className="text-center text-gray-500 font-semibold">Amount</TableHead>
                <TableHead className="text-end text-gray-500 font-semibold">Date Applied</TableHead>
                <TableHead className="text-center text-gray-500 font-semibold">Status</TableHead>
                <TableHead className="text-gray-500 font-semibold"></TableHead>
              </TableRow>
            ) : (
              <TableRow>
                <TableHead className="w-[390px] text-gray-500 font-semibold pl-8">User Details</TableHead>
                <TableHead className="text-center text-gray-500 font-semibold">Customer Name</TableHead>
                <TableHead className="text-end text-gray-500 font-semibold">Date</TableHead>
                <TableHead className="text-center text-gray-500 font-semibold">Action</TableHead>
                <TableHead className="text-gray-500 font-semibold"></TableHead>
              </TableRow>
            )}
      </TableHeader>
      <TableBody>
        {(loans).map((data: LoanUserList) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium p-5">
              <UserAvatarAndInfo 
                loan={data}
                profile={profile}
              />
            </TableCell>
            <TableCell className="text-center">
              {profile === "user" ? (
                <div>
                  {data.loanAmount}
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="text-md" style={{ fontWeight: 500 }}>
                    {data.user?.name}
                  </div>
                  <div className="text-xs text-slate-400 font-semibold">
                    on {format(new Date(data.createdAt), "dd.MM.yyyy")}
                  </div>
                </div>
              )}
            </TableCell>
            <TableCell className="text-end">
              <DisplayDate date={data.createdAt} />
            </TableCell>
            <TableCell>
              <LoanStatus currentStatus={data.currentStatus} />
            </TableCell>
            <TableCell className="text-right">
              <OptionsDialog />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default LoanList;
