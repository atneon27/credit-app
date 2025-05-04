type Props = {
    heading: string;
    content: string;
    value: number;
    layerColor: string;
    cardColor: string;
}

const HighlightedCard = ({ heading, content, value, layerColor, cardColor }: Props) => {
    return (
        <div style={{ backgroundColor: cardColor }} className="flex flex-col w-full rounded-md">
            <div style={{ backgroundColor: layerColor }} className="p-1 rounded-full"></div>
            <div className="flex flex-col justify-around p-6 gap-2 text-white">
                <div className="text-2xl font-bold">
                    {heading}
                </div>
                <div className="text-lg font-semibold">
                    {content}
                </div>
                <div className="text-3xl font-bold">
                    {value}%    
                </div>
            </div>
        </div>
    )
}

export default HighlightedCard;