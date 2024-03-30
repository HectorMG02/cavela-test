import { QuotesAction, QuotesState } from "./quotes.types";

const initialState: QuotesState = {
    quotes: [],
    savedQuotes: []
}


const quotesReducer = (state = initialState, action: QuotesAction) => {
    switch(action.type) {
        case 'GET_QUOTES':
            return {
                ...state,
                quotes: action.payload.quotes,
            }
        default:
            return state;
    }
}


export default quotesReducer;