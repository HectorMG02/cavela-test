import { QuoteItemType } from "../../types/dataTypes";
import { QUOTE_ITEMS, SUPPLIERS } from "../../utils/data";
import { processData } from "../../utils/processData";
import { toggleLoading } from '../loading/loading.action';
import { AppDispatch } from "../store";
import { SupplierWithQuoteItemsType } from "../types";

export const getQuotes = () => async (dispatch: AppDispatch) => {
    dispatch(toggleLoading(true));
    dispatch({
        type: 'GET_QUOTES',
        payload: {
            quotes: processData(QUOTE_ITEMS, SUPPLIERS),
        }
    })
    dispatch(toggleLoading(false, 3000));
}



export const createQuote = (newQuoteData: SupplierWithQuoteItemsType) => ({
    type: 'CREATE_QUOTE',
    payload: {
        newQuoteData
    }
})


export const updateQuote = (supplier_id: string, quoteItems: QuoteItemType[]) => ({
    type: 'UPDATE_QUOTE',
    payload: {
        supplier_id,
        quoteItems,
    }
})
  

export const closeQuote = (supplier_id: string) => ({
    type: 'CLOSE_QUOTE',
    payload: {
        supplier_id
    }
})