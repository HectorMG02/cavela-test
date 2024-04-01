import { SupplierWithQuoteItemsType } from "../../../redux/types";

export type Variant = {
    variant?: string;
    name: string;
    quantity: number;
    unitCost: string;
    total: string;
  };
 
  

export interface SupplierCardProps {
    quote: SupplierWithQuoteItemsType;
    closeCard: (supplierId: string) => void;
}
  
 

export interface QuoteItemData {
  variant: string;
  quantity: number;
  unit_cost: string;
}