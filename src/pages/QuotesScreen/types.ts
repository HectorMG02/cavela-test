import { CardsColorScheme, RatingColorScheme } from "../../types/colorTypes";
import { QuoteItem } from "../../types/dataTypes";


export interface Card {
    supplier_id: string;
    name: string;
    score: number;
    quoteItems: QuoteItem[];
    colorScheme: CardsColorScheme;
    ratingColorScheme: RatingColorScheme;
}