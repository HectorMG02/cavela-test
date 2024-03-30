import { CardsColorScheme, RatingColorScheme } from "../../../types/colorTypes";

export type Variant = {
    variant?: string;
    name: string;
    quantity: number;
    unitCost: string;
    total: string;
  };
 
  

export interface SupplierCardProps {
    quote: QuoteData;
    closeCard: (supplierId: string) => void;
}
  

export interface QuoteData {
  supplier_id: string;
  name: string;
  score: number;
  quoteItems: Array<QuoteItemData>;
  colorScheme: CardsColorScheme;
  ratingColorScheme: RatingColorScheme;
}


export interface QuoteItemData {
  variant: string;
  quantity: number;
  unit_cost: string;
}