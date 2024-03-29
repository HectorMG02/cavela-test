import { useEffect, useState } from "react";
import { Card, Quote, QuoteItem, Supplier } from "./types";
import { CardsColorScheme } from "../../components/SupplierCard/types";

const SUPPLIERS: Supplier[] = [
    {
        "supplier_id": "597d3e89-7b7d-4f55-a0b5-861a08f58cad",
        "name": "Supplier 1",
        "score": 4.9
    },
    {
        "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ea18",
        "name": "Supplier 2",
        "score": 4.2
    }
]


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QUOTES: Quote[] = [
    {
        "quote_items": ["1be92e49-98a0-44e6-a9d4-7a9fd480b22c"],
        "badges": [
            ["reviews", 1],
            ["cost", 2],
        ],
    },
    {
        "quote_items": ["1be92e49-98a0-44e5-a9d4-7a9fd480b22c", "1be92e49-98a0-44e6-a9d4-7a9fd480b22a"],
        "badges": [
            ["cost", 1]
        ]
    }
]



const QUOTE_ITEMS: QuoteItem[] = [
    {
        "supplier_id": "597d3e89-7b7d-4f55-a0b5-861a08f58cad",
        "quote_item_id": "1be92e49-98a0-44e6-a9d4-7a9fd480b22c",
        "variant": "Product A - Variant 1",
        "moq": 100,
        "quantity": 150,
        "unit cost": "$5.00",
        "lead time": "2 weeks",
        "sample cost": "$50",
        "badges": [
            ["cavela_choice", true]
        ]
    },
    {
        "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ea18",
        "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6560b7",
        "variant": "Product B - Variant 2",
        "moq": 200,
        "quantity": 200,
        "unit cost": "$4.50",
        "lead time": "3 weeks",
        "sample cost": "$45",
        "badges": [
            ["cavela_choice", null]
        ],
    }
]


const colorScheme: CardsColorScheme[] = [
    {
        backgroundColor: '#B7CBC7',
        borderColor: '#798E8B',
    },
    {
        backgroundColor: '#E5DABD',
        borderColor: '#E6DBBF',
    }
]


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
                ...supplier,
                supplier_id: supplier.supplier_id,
                quoteItems: itemsBySupplier[supplier.supplier_id] || [],
                colorScheme: colorScheme[SUPPLIERS.findIndex(s => s.supplier_id === supplier.supplier_id)]
            }));

            setCardsData(cards);
            setLoading(false);
        };

        setTimeout(processData, 3000);
    }, []);

    
    return {
        loading,
        cardsData,
        closeCard
    };
};

export default useLogic;