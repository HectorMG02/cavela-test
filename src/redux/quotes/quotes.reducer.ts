import { QuotesAction, QuotesState } from "./quotes.types";

const initialState: QuotesState = {
    allQuotes: [],
    availableQuotes: [],
    supplier_id: ''
}


const quotesReducer = (state = initialState, action: QuotesAction) => {
    switch(action.type) {
        case 'GET_QUOTES':
            return {
                ...state,
                allQuotes: action.payload.quotes,
                availableQuotes: action.payload.quotes
            }
        case 'CLOSE_QUOTE':
            return {
                ...state,
                supplier_id: action.payload.supplier_id,
                availableQuotes: state.availableQuotes.filter(quote => quote.supplier_id !== action.payload.supplier_id)
            }
            
        default:
            return state;
    }
}


export default quotesReducer;