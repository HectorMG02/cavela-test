import { Supplier } from "../../types/dataTypes";

export enum ActionType {
    GET_QUOTES = 'GET_QUOTES',
    CREATE_QUOTE = 'CREATE_QUOTE',
    CLOSE_QUOTE = 'CLOSE_QUOTE',
}


export interface QuotesState {
    quotes?: Supplier[];
    newQuoteData?: Supplier;
    supplier_id: string;
    allQuotes: Supplier[];
    availableQuotes: Supplier[];
}


export interface QuotesAction {
    type: ActionType;
    payload: QuotesState;
  }
  