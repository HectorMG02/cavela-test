import { QuotesAction, QuotesState } from "./quotes.types";

const initialState: QuotesState = {
    quotes: [],
    savedQuotes: [],
    supplier_id: ''
}


const quotesReducer = (state = initialState, action: QuotesAction) => {
    switch(action.type) {
        case 'GET_QUOTES':
            return {
                ...state,
                quotes: action.payload.quotes,
            }

        case 'CLOSE_QUOTE':
            return {
                ...state,
                quotes: state.quotes.filter(quote => quote.supplier_id !== action.payload.supplier_id)
            }
            
        default:
            return state;
    }
}


export default quotesReducer;