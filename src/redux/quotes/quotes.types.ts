import { Supplier } from "../../types/dataTypes";

export enum ActionType {
    GET_QUOTES = 'GET_QUOTES',
    CLOSE_QUOTE = 'CLOSE_QUOTE',
}


export interface QuotesState {
    quotes?: Supplier[];
    supplier_id: string;
    allQuotes: Supplier[];
    availableQuotes: Supplier[];
}


export interface QuotesAction {
    type: ActionType;
    payload: QuotesState;
  }
  