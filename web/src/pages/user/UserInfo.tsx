import { Funnel, SortDesc } from "lucide-react";
import LoanHistory from "./LoanList";
import UserCashInfo from "./UserCashInfo";
import UserOptionsToggle from "./UserOptionsToggle";

const UserInfo = () => {
    return (
        <div className="flex flex-col h-screen w-[600px] gap-5">
            <UserCashInfo />
            <UserOptionsToggle />
            <LoanHistory />
        </div>
    )
}

export default UserInfo;