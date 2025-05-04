import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EllipsisVertical } from "lucide-react";
import Avatar from "react-avatar"

const loanApplications = [
  {
    id: 1,
    officer: {
      name: "John Okoh",
      avatar: "/api/placeholder/40/40" // Placeholder for avatar image
    },
    amount: "50,000.00",
    status: "PENDING",
    statusColor: "#FFC107", // Yellow
    dateApplied: "June 09, 2021",
    time: "6:30 PM",
    updated: "1 day ago",
    loanStatus: "Not Debt Yet"
  },
  {
    id: 2,
    officer: {
      name: "John Okoh",
      avatar: "/api/placeholder/40/40"
    },
    amount: "100,000.00",
    status: "VERIFIED",
    statusColor: "#1CD4A2", // Green
    dateApplied: "June 07, 2021",
    time: "6:30 PM",
    updated: "1 day ago",
    loanStatus: "Not Debt Yet"
  },
  {
    id: 3,
    officer: {
      name: "John Okoh",
      avatar: "/api/placeholder/40/40"
    },
    amount: "100,000.00",
    status: "REJECTED",
    statusColor: "#DC3545", // Red
    dateApplied: "June 07, 2021",
    time: "6:30 PM",
    updated: "1 day ago",
    loanStatus: "Not Debt Yet"
  },
  {
    id: 4,
    officer: {
      name: "John Okoh", 
      avatar: "/api/placeholder/40/40"
    },
    amount: "100,000.00",
    status: "APPROVED",
    statusColor: "#0D6EFD", // Blue
    dateApplied: "May 27, 2021",
    time: "6:30 PM",
    updated: "1 day ago",
    loanStatus: "Loan Fully Repaid"
  }
];

const LoanList = () => {
  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[390px] text-gray-500 font-semibold pl-8">Loan Officer</TableHead>
          <TableHead className="text-center text-gray-500 font-semibold">Amount</TableHead>
          <TableHead className="text-end text-gray-500 font-semibold">Date Applied</TableHead>
          <TableHead className="text-center text-gray-500 font-semibold">Status</TableHead>
          <TableHead className="text-gray-500 font-semibold"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loanApplications.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium p-5">
              <div className="flex flex-row items-center gap-5">
                <Avatar size="44px" name={data.officer.name} round color="grey" />
                <div className="flex flex-col">
                  <div className="text-sm font-semibold">{data.officer.name}</div>
                  <div className="text-xs text-gray-400">{data.dateApplied}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">{data.amount}</TableCell>
            <TableCell className="text-end">{data.dateApplied}</TableCell>
            <TableCell>
              <div className="flex justify-center">
                <div style={{backgroundColor: data.statusColor}} className={`px-3 py-2 w-fit rounded-full text-white flex items-center justify-center font-semibold`}>
                  {data.status}
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <EllipsisVertical className="h-4 w-4 stroke-gray-400 cursor-pointer" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default LoanList;
