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
  

export const closeQuote = (supplier_id: string) => ({
    type: 'CLOSE_QUOTE',
    payload: {
        supplier_id
    }
})