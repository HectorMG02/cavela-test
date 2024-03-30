import { useEffect, useState } from "react";
import { Card } from "./types";
import { cardColorSchemes, ratingColorSchemes } from "../../utils/colors";
import { QUOTE_ITEMS, SUPPLIERS } from "../../utils/data";
import { QuoteItem } from "../../types/dataTypes";




const useLogic = () => {
    const [loading, setLoading] = useState(true);
    const [cardsData, setCardsData] = useState<Card[]>([]);

    const closeCard = (supplier_id: string) => {
        setCardsData(cardsData.filter(card => card.supplier_id !== supplier_id));
    }

    useEffect(() => {
        const processData = () => {
            const itemsBySupplier = QUOTE_ITEMS.reduce((acc: Record<string, QuoteItem[]>, item) => {
                if (!acc[item.supplier_id]) acc[item.supplier_id] = [];
                
                acc[item.supplier_id].push(item);
                return acc;
            }, {});
            const cards: Card[] = SUPPLIERS.map(supplier => ({
                supplier_id: supplier.supplier_id,
                name: supplier.name,
                score: supplier.score,
                quoteItems: itemsBySupplier[supplier.supplier_id] || [],
                colorScheme: cardColorSchemes.find(scheme => supplier.score >= scheme.minScore) || cardColorSchemes[2],
                ratingColorScheme: ratingColorSchemes.find(scheme => supplier.score >= scheme.minScore) || ratingColorSchemes[2]
            }));


            setCardsData(cards);
            setLoading(false);
        };

        setTimeout(processData, 100 /** 3000 */);
    }, []);

    console.log(cardsData)
    
    return {
        loading,
        cardsData,
        closeCard
    };
};

export default useLogic;