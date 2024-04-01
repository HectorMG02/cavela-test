import { SupplierWithQuoteItemsType } from "../types";

export enum ActionType {
    GET_QUOTES = 'GET_QUOTES',
    CREATE_QUOTE = 'CREATE_QUOTE',
    UPDATE_QUOTE = 'UPDATE_QUOTE',
    CLOSE_QUOTE = 'CLOSE_QUOTE',
}


export interface QuotesState {
    quoteItems?: unknown;
    quotes?: SupplierWithQuoteItemsType[];
    newQuoteData?: SupplierWithQuoteItemsType;
    supplier_id: string;
    allQuotes: SupplierWithQuoteItemsType[];
    availableQuotes: SupplierWithQuoteItemsType[];
}


export interface QuotesAction {
    type: ActionType;
    payload: QuotesState;
  }
  