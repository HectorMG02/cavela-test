import { useEffect, useState } from "react";
import { Quote, QuoteItem, Supplier } from "./types";

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





const useLogic = () => {
    const [loading, setLoading] = useState(true);
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setQuotes(QUOTES);
            setSuppliers(SUPPLIERS);
            setQuoteItems(QUOTE_ITEMS);
            setLoading(false);
        }, 3000);
    }, []);

    return {
        loading,
        quotes,
        suppliers,
        quoteItems,
    }
}

export default useLogic;