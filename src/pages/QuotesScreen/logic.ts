/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Quote, QuoteItem, Supplier } from "./types";
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
    const [cardsData, setCardsData] = useState<any>([]);

    useEffect(() => {
        const processData = () => {
            // Agrupar quoteItems por supplier_id
            const itemsBySupplier = QUOTE_ITEMS.reduce((acc: any, item) => {
                if (!acc[item.supplier_id]) acc[item.supplier_id] = [];
                acc[item.supplier_id].push(item);
                return acc;
            }, {});

            // Unir suppliers con sus respectivos quoteItems
            const cards = SUPPLIERS.map(supplier => ({
                ...supplier,
                quoteItems: itemsBySupplier[supplier.supplier_id] || [],
                badges: [], // Inicializar badges vacíos, se llenarán en el próximo paso
                colorScheme: colorScheme[SUPPLIERS.findIndex(s => s.supplier_id === supplier.supplier_id)]
            }));

            // Añadir información de quotes a cada tarjeta
            QUOTES.forEach((quote: any) => {
                quote.quote_items.forEach((itemId: number) => {
                    const item = QUOTE_ITEMS.find((item: any) => item.quote_item_id === itemId);
                    if (item) {
                        const card = cards.find(card => card.supplier_id === item.supplier_id);
                        if (card) {
                            card.badges = card.badges.concat(quote.badges);
                        }
                    }
                });
            });

            setCardsData(cards);
            setLoading(false);
        };

        setTimeout(processData, 3000);
    }, []);

    return {
        loading,
        cardsData,
    };
};

export default useLogic;