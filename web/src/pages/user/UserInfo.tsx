import LoanHistory from "./LoanHistory";
import UserCashInfo from "./UserCashInfo";
import UserOptionsToggle from "./UserOptionsToggle";

const UserInfo = () => {
    return (
        <div className="flex flex-col items-center h-screen gap-5">
            <div className="w-[760px]">
                <UserCashInfo />
            </div>
            <div className="w-[760px]">
                <UserOptionsToggle />
            </div>
            <div className="w-[1140px]">
                <LoanHistory />
            </div>
        </div>
    )
}

export default UserInfo;