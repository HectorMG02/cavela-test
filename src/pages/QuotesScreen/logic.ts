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
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82eb20",
      "name": "Supplier 3",
      "score": 5
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ec21",
      "name": "Supplier 4",
      "score": 3.2
    }
  ]


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QUOTES: Quote[] = [
    {
      "quote_items": ["1be92e49-98a0-44e6-a9d4-7a9fd480b22c", "52fe34bf-2d54-48c1-a3e6-f7a8ee6560b7"],
      "badges": [
        ["reviews", 1],
        ["cost", 2]
      ]
    },
    {
      "quote_items": ["1be92e49-98a0-44e5-a9d4-7a9fd480b33d", "52fe34bf-2d54-48c1-a3e6-f7a8ee6561c8"],
      "badges": [["cost", 1]]
    }
  ]



const QUOTE_ITEMS: QuoteItem[] = [
    {
      "supplier_id": "597d3e89-7b7d-4f55-a0b5-861a08f58cad",
      "quote_item_id": "1be92e49-98a0-44e6-a9d4-7a9fd480b22c",
      "variant": "Product A - Variant 1",
      "moq": 100,
      "quantity": 150,
      "unit_cost": "$5.00",
      "lead_time": "2 weeks",
      "sample_cost": "$50",
      "badges": [["cavela_choice", true]]
    },
    {
      "supplier_id": "597d3e89-7b7d-4f55-a0b5-861a08f58cad",
      "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6560b7",
      "variant": "Product B - Variant 2",
      "moq": 200,
      "quantity": 200,
      "unit_cost": "$4.50",
      "lead_time": "3 weeks",
      "sample_cost": "$45",
      "badges": [["cavela_choice", false]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ea18",
      "quote_item_id": "1be92e49-98a0-44e5-a9d4-7a9fd480b33d",
      "variant": "Product A - Variant 1",
      "moq": 100,
      "quantity": 150,
      "unit_cost": "$5.00",
      "lead_time": "2 weeks",
      "sample_cost": "$50",
      "badges": [["cavela_choice", true]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ea18",
      "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6561c8",
      "variant": "Product B - Variant 2 With a longer name",
      "moq": 200,
      "quantity": 200,
      "unit_cost": "$4.50",
      "lead_time": "3 weeks",
      "sample_cost": "$45",
      "badges": [["cavela_choice", true]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82eb20",
      "quote_item_id": "1be92e49-98a0-44e5-a9d4-7a9fd480b44c",
      "variant": "Product A - Variant 1",
      "moq": 100,
      "quantity": 150,
      "unit_cost": "$5.00",
      "lead_time": "2 weeks",
      "sample_cost": "$50",
      "badges": [["cavela_choice", false]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82eb20",
      "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6561d9",
      "variant": "Product B - Variant 2",
      "moq": 200,
      "quantity": 200,
      "unit_cost": "$4.50",
      "lead_time": "3 weeks",
      "sample_cost": "$45",
      "badges": [["cavela_choice", false]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ec21",
      "quote_item_id": "1be92e49-98a0-44e5-a9d4-7a9fd480b55e",
      "variant": "Product A - Variant 1",
      "moq": 100,
      "quantity": 150,
      "unit_cost": "$5.00",
      "lead_time": "2 weeks",
      "sample_cost": "$50",
      "badges": [["cavela_choice", false]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ec21",
      "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6561e1",
      "variant": "Product B - Variant 2",
      "moq": 200,
      "quantity": 200,
      "unit_cost": "$4.50",
      "lead_time": "3 weeks",
      "sample_cost": "$45",
      "badges": [["cavela_choice", false]]
    }
  ]


const colorSchemes: CardsColorScheme[] = [
    {
        backgroundColor: '#B7CBC7',
        borderColor: '#798E8B',
        minScore: 4.5
    },
    {
        backgroundColor: '#E5DABD',
        borderColor: '#E6DBBF',
        minScore: 4
    },
    {
        backgroundColor: '#FFC8C8',
        borderColor: '#FF0000',
        minScore: 0
    }
]

const scoreColorSchemes: CardsColorScheme[] = [
    {
        backgroundColor: '#63AB61',
        borderColor: '#3E6841',
        textColor: '#FFFFFF',
        minScore: 4.5
    },
    {
        backgroundColor: '#F1D3A2',
        borderColor: '#B49A4C',
        textColor: '#000000',
        minScore: 4
    },
    {
        backgroundColor: '#F2C8C0',
        borderColor: '#CD7E6C',
        minScore: 0
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
                colorScheme: colorSchemes.find(scheme => supplier.score >= scheme.minScore) || colorSchemes[2],
                scoreColorScheme: scoreColorSchemes.find(scheme => supplier.score >= scheme.minScore) || scoreColorSchemes[2]
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