
import { QuoteItemType, SupplierType } from "../types/dataTypes";
import { cardColorSchemes, ratingColorSchemes } from "./colors";


export const processData = (quoteItems: QuoteItemType[], suppliers: SupplierType[]) => {
    const itemsBySupplier: { [key: string]: QuoteItemType[] } = quoteItems.reduce((acc: { [key: string]: QuoteItemType[] }, item) => {
        if (!acc[item.supplier_id]) acc[item.supplier_id] = [];
        
        acc[item.supplier_id].push(item);
        return acc;
    }, {});
  
    return suppliers.map((supplier: SupplierType) => ({
      supplier_id: supplier.supplier_id,
      name: supplier.name,
      score: supplier.score,
      quoteItems: itemsBySupplier[supplier.supplier_id] || [],
      colorScheme: cardColorSchemes.find(scheme => supplier.score >= scheme.minScore),
      ratingColorScheme: ratingColorSchemes.find(scheme => supplier.score >= scheme.minScore)
    }));
  };