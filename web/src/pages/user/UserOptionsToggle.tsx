import { SearchIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const UserOptionsToggle = () => {
    const [activeIdx, setActiveIdx] = useState<number>(1);

    const handleClick = (idx: number) => {
        setActiveIdx(idx);
    }
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center rounded-lg justify-between bg-white shadow-md shadow-gray-400">
                <Button 
                    onClick={() => handleClick(1)} 
                    className={`hover:bg-green-50 bg-white cursor-pointer py-6 flex-grow ${activeIdx === 1 ? 'bg-green-50' : '' }`}
                >
                    <div className="font-bold text-black ">
                        Borrow Cash
                    </div>
                </Button>
                <Separator orientation="vertical" />
                <Button 
                    onClick={() => handleClick(2)} 
                    className={`hover:bg-green-50 bg-white cursor-pointer py-6 flex-grow ${activeIdx === 2 ? 'bg-green-50' : '' }`}
                >
                    <div className="font-bold text-black ">
                        Transact
                    </div>
                </Button>
                <Separator orientation="vertical" />
                <Button 
                    onClick={() => handleClick(3)} 
                    className={`hover:bg-green-50 bg-white cursor-pointer py-6 flex-grow ${activeIdx === 3 ? 'bg-green-50' : '' }`}
                >
                    <div className="font-bold text-black ">
                        Deposit Cash
                    </div>
                </Button>
            </div>

            <div className="grid w-full items-center gap-2 shadow-md shadow-gray-400 rounded-lg">
            <div className="relative">
                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                <SearchIcon className="h-4 w-4 stroke-2 stroke-gray-500" />
                </div>
                    <Input id="search" type="search" placeholder="Search for loans" className="w-full rounded-lg bg-background font-semibold py-4 pl-8" />
                </div>
            </div>
        </div>
    )
}   

export default UserOptionsToggle;