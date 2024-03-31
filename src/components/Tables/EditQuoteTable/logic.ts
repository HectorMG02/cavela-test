/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateQuote, closeQuote } from '../../../redux/quotes/quotes.action';



const useLogic = ({ onClose, currentData } : { onClose: () => void, currentData: any }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    const { allQuotes, availableQuotes } = useSelector((state: any) => state.quotes);
    const [selectedQuotes, setSelectedQuotes] = useState<any>([])



    const checkQuoteIsDisabled = (supplier_id: string) => {
        return currentData.supplier_id !== supplier_id;
    }


    const toggleQuote = (quote_id: string, supplier_id: string, checked: boolean) => {
      const quoteItems = allQuotes.find((quote: any) => quote.supplier_id === supplier_id).quoteItems
      const quote = quoteItems.find((item: any) => item.quote_item_id === quote_id);

        if(checked){
            setSelectedQuotes([...selectedQuotes, quote]);
        } else {
            setSelectedQuotes(selectedQuotes.filter((quote: any) => quote.quote_item_id !== quote_id));
        }   

    }


    const checkInputChecked = (quote_item_id: string) => {
        return availableQuotes.filter((quote: any) => quote.quoteItems.some((item: any) => item.quote_item_id === quote_item_id)).length > 0;
    }
  
    
    const updateQuoteData = () => {
        if(selectedQuotes.length === 0){
            dispatch(closeQuote(currentData.supplier_id))
        } else{
            dispatch(updateQuote(currentData.supplier_id, selectedQuotes));
        }

        onClose();
    };


    useEffect(() => {
        setSelectedQuotes(currentData.quoteItems);
    }, [currentData])

    
    return {
        allQuotes,
        updateQuoteData,
        checkQuoteIsDisabled,
        toggleQuote,
        checkInputChecked,
    }
}

export default useLogic;