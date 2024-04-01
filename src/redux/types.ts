import { QuoteItemType } from "../types/dataTypes";
import { LoadingState } from "./loading/loading.types";
import { QuotesState } from "./quotes/quotes.types";

export type RootState = {
    quotes: QuotesState;
    loading: LoadingState;
}

export type ColorScheme =  {
    backgroundColor: string;
    borderColor: string;
    minScore: number;
  }
  
  export type SupplierWithQuoteItemsType = {
    supplier_id: string;
    name: string;
    score: number;
    quoteItems: QuoteItemType[];
    colorScheme: ColorScheme;
    ratingColorScheme: ColorScheme;
  }