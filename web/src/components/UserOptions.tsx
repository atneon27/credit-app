import { BookText, CreditCard, Gauge, IndianRupee } from "lucide-react";

const UserOptions = () => {
    return (
        <div className="flex flex-row items-center gap-5 text-green-600 font-bold">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <Gauge className="w-7 h-7 stroke-green-600" />
                Home
            </div>
            <div className="flex flex-row items-center gap-2 opacity-[70%] cursor-pointer">
                <IndianRupee className="w-6 h-6 stroke-green-600" />
                Payments
            </div>
            <div className="flex flex-row items-center opacity-[70%] gap-2 cursor-pointer">
                <BookText className="w-7 h-7 fill-green-600 stroke-white" />
                Budget
            </div>
            <div className="flex flex-row items-center opacity-[70%] gap-2 cursor-pointer">
                <CreditCard className="w-7 h-7 fill-green-600 stroke-white" />
                Card
            </div>
        </div>
    );
}

export default UserOptions;