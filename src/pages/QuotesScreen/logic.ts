import { useEffect, useState } from "react";
import { Card } from "./types";
import { processData } from "../../utils/processData";
import { QUOTE_ITEMS, SUPPLIERS } from "../../utils/data";



const useLogic = () => {
    const [loading, setLoading] = useState(true);
    const [cardsData, setCardsData] = useState<Card[]>([]);

    const closeCard = (supplier_id: string) => {
        setCardsData(cardsData.filter(card => card.supplier_id !== supplier_id));
    }

    useEffect(() => {
        setTimeout(() => {
            const cards = processData(QUOTE_ITEMS, SUPPLIERS);
            setCardsData(cards);
            setLoading(false);
        }, 100);        

    }, []);

    console.log(cardsData)
    
    return {
        loading,
        cardsData,
        closeCard
    };
};

export default useLogic;