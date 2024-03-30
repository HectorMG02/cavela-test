/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { RootState } from "../../../redux/types";
import { useState } from 'react';


const useLogic = () => {
     const { allQuotes, availableQuotes } = useSelector((state: RootState) => state.quotes);
    const [ selectedQuotes, setSelectedQuotes ] = useState<any[]>([]);

     const checkAvailableQuote  = (supplier_id: string) => {
        return !!availableQuotes.find((quote: any) => {
            return quote.supplier_id === supplier_id
        })
     }

  
     const toggleQuote = (quote: any) => {
        const quoteAlreadySelected = !!selectedQuotes.find((item: any) => item.quote_item_id === quote.quote_item_id)

        if(!quoteAlreadySelected) {
            setSelectedQuotes([...selectedQuotes, quote])
        } else {
            setSelectedQuotes(selectedQuotes.filter((item: any) => item.quote_item_id !== quote.quote_item_id))
        }
     }

     
    const createNewQuote = () => {
        console.log('Create new quote', selectedQuotes)
    }

    return {
        allQuotes,
        checkAvailableQuote,
        toggleQuote,
        createNewQuote
    }
}

export default useLogic;