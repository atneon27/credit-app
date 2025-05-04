import { LucideProps } from "lucide-react";

type Props = {
    value: number;
    text: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

const SummaryTile = ({ value, text,icon: SummaryIcon }: Props) => {
    return (
        <div className="flex shadow-sm shadow-gray-400 bg-white">
            <div className="bg-green-600 flex items-center p-8">
                <SummaryIcon className="h-10 w-10 stroke-white" />
        </div>
            <div className="flex flex-col justify-around pl-5 pt-5 pb-3 w-full">
                <div className="text-3xl font-bold">
                    {value}
                </div>
                <div className="text-xl font-medium">
                    {text.toUpperCase()}    
                </div>
            </div>
        </div>
    )
}

export default SummaryTile;