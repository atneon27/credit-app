import { Banknote } from "lucide-react";
import SummaryTile from "./SummaryTile";

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

const SummaryGrid = ({ rows, cols }: Props) => {
    const getColsClass = getClass(cols);
    const tileLength = rows * cols;

    return (
        <div className={`grid ${getColsClass} gap-7`}>
            {Array.from({ length: tileLength}).map((_, idx) => {
                return <SummaryTile
                    key={idx} 
                    icon={Banknote} 
                    text={"loan"}   
                    value={100} 
                />
            })}
        </div>
    )
}

export default SummaryGrid;