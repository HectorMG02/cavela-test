import { LoadingState } from "./loading/loading.types";
import { QuotesState } from "./quotes/quotes.types";

export type RootState = {
    quotes: QuotesState;
    loading: LoadingState;
}