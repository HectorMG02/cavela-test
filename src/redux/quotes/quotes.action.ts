import { QUOTE_ITEMS, SUPPLIERS } from "../../utils/data";
import { processData } from "../../utils/processData";
import { toggleLoading } from '../loading/loading.action';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getQuotes = () => async (dispatch: any) => {
    dispatch(toggleLoading(true));
    dispatch({
        type: 'GET_QUOTES',
        payload: {
            quotes: processData(QUOTE_ITEMS, SUPPLIERS),
        }
    })
    dispatch(toggleLoading(false, 3000));
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createQuote = (newQuoteData: any) => ({
    type: 'CREATE_QUOTE',
    payload: {
        newQuoteData
    }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateQuote = (supplier_id: string, quoteItems: unknown) => (dispatch: any) => {
    dispatch({
        type: 'UPDATE_QUOTE',
        payload: {
            supplier_id,
            quoteItems,
        }
    })
}
  

export const closeQuote = (supplier_id: string) => ({
    type: 'CLOSE_QUOTE',
    payload: {
        supplier_id
    }
})