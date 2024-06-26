 export type SupplierType = {
    supplier_id: string;
    name: string;
    score: number
 }

export type QuoteType = {
    quote_items: QuoteItemType[];
    badges: [string, number | null][];
}

export type QuoteItemType = {
    supplier_id: string;
    quote_item_id: string;
    variant: string;
    moq: number;
    quantity: number;
    "unit_cost": string;
    "lead_time": string;
    "sample_cost": string;
    badges: [string, boolean | null][];
}


 
    export type RawQuoteTypes = {
        quote_items: string[];
        badges: [string, number | null][];
    }