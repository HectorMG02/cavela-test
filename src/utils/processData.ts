
import { QuoteItem, Supplier } from "../types/dataTypes";
import { cardColorSchemes, ratingColorSchemes } from "./colors";


export const processData = (quoteItems: QuoteItem[], suppliers: Supplier[]) => {
    const itemsBySupplier: { [key: string]: QuoteItem[] } = quoteItems.reduce((acc: { [key: string]: QuoteItem[] }, item) => {
        if (!acc[item.supplier_id]) acc[item.supplier_id] = [];
        
        acc[item.supplier_id].push(item);
        return acc;
    }, {});
  
    return suppliers.map((supplier: Supplier) => ({
      supplier_id: supplier.supplier_id,
      name: supplier.name,
      score: supplier.score,
      quoteItems: itemsBySupplier[supplier.supplier_id] || [],
      colorScheme: cardColorSchemes.find(scheme => supplier.score >= scheme.minScore),
      ratingColorScheme: ratingColorSchemes.find(scheme => supplier.score >= scheme.minScore)
    }));
  };