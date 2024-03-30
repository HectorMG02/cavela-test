import { Quote, Supplier } from "../../types/dataTypes";

export enum ActionType {
    GET_QUOTES = 'GET_QUOTES',
    SAVE_QUOTE = 'SAVE_QUOTE',
    REMOVE_QUOTE = 'REMOVE_QUOTE',
    CLOSE_QUOTE = 'CLOSE_QUOTE',
}


export interface QuotesState {
    quotes?: Supplier[];
    supplier_id: string;
    allQuotes: Supplier[];
    availableQuotes: Supplier[];
    savedQuotes: Quote[];
}


export interface QuotesAction {
    type: ActionType;
    payload: QuotesState;
  }
  