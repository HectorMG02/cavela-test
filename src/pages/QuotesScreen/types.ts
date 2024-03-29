import { CardsColorScheme } from "../../components/SupplierCard/types";

export interface Supplier {
    supplier_id: string;
    name: string;
    score: number;
}

export interface Quote {
    quote_items: string[];
    badges: [string, number | null][];
}

export interface QuoteItem {
    supplier_id: string;
    quote_item_id: string;
    variant: string;
    moq: number;
    quantity: number;
    "unit cost": string;
    "lead time": string;
    "sample cost": string;
    badges: [string, boolean | null][];
}

export interface Card {
    supplier_id: string;
    name: string;
    score: number;
    quoteItems: QuoteItem[];
    colorScheme: CardsColorScheme;
    scoreColorScheme: CardsColorScheme;
}