import { Banknote, BanknoteArrowDown, BanknoteArrowUp, Landmark, PiggyBank, UserCheck, UserMinus, Users } from "lucide-react";
import SummaryTile from "./SummaryTile";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavbar } from "./NavbarProvider";
import { LoaderCircle } from "lucide-react";

type Props = {
    rows: number;
    cols: number;
}

const getClass = (cols: number) => {
    return {
        1: `grid-cols-1`,
        2: `grid-cols-2`,
        3: `grid-cols-3`,
        4: `grid-cols-4`,
    } [cols] || "grid-cols-1"
}

const getIcon = (idx: number) => {
    return {
        1: Users,
        2: UserMinus,
        3: Banknote,
        4: BanknoteArrowUp,
        5: PiggyBank,
        6: BanknoteArrowDown,
        7: UserCheck,
        8: Landmark
    } [idx]
}

type Summary = {
    text: string;
    value: number;
    iconIdx: number;
}

const SummaryGrid = ({ cols }: Props) => {
    const { profile } = useNavbar();
    const getColsClass = getClass(cols);
    
    const { data, isLoading } = useQuery({
        queryKey: ["dashboardSummary"],
        queryFn: async () => {
            const response = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_BACKEND_URL}/api/loan/dashboard-summary?userType=${profile}`,
            });

            return response.data;
        },
    });

    if(isLoading) {
        return (
        <div className="flex felx-row justify-center items-center gap-2">
            <LoaderCircle className="h-5 w-5 animate-spin text-muted-foreground" />
            Loading ...
        </div>
        )
    }

    const summary = (data as any)?.summary || [];

    return (
        <div className={`grid ${getColsClass} gap-7`}>
            {summary.map((data: Summary, idx: number) => {
                return <SummaryTile 
                    key={idx}
                    value={data.value}
                    text={data.text}
                    icon={getIcon(data.iconIdx) ?? Users}
                />
            })}
        </div>
    )
}

export default SummaryGrid;