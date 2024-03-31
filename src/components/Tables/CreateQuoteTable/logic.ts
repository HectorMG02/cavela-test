/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { createQuote } from '../../../redux/quotes/quotes.action';



const useLogic = ({ onClose } : { onClose: () => void}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    const { allQuotes, availableQuotes } = useSelector((state: any) => state.quotes);
    const [selectedQuotes, setSelectedQuotes] = useState<any>([])
    const [selectedSupplier, setSelectedSupplier] = useState<any>(null)


    const checkCanSubmit = () => {
        return !(selectedQuotes.length > 0);
    }

    const checkQuoteIsDisabled = (supplier_id: string) => {
        const supplierIsUsed = availableQuotes.filter((quote: any) => quote.supplier_id === supplier_id).length > 0;

        if(supplierIsUsed){
           return true;
        }

        if(selectedQuotes.length > 0){
            const selectedQuote = selectedQuotes.find((quote: any) => quote.supplier_id === supplier_id);
            return selectedQuote ? false : true;
        }
    }


    const toggleQuote = (quote_id: string, supplier_id: string, checked: boolean) => {
        const supplierData = allQuotes.find((quote: any) => quote.supplier_id === supplier_id);
      const quoteItems = allQuotes.find((quote: any) => quote.supplier_id === supplier_id).quoteItems
      const quote = quoteItems.find((item: any) => item.quote_item_id === quote_id);

        if(checked){
            setSelectedQuotes([...selectedQuotes, quote]);
        } else {
            setSelectedQuotes(selectedQuotes.filter((quote: any) => quote.quote_item_id !== quote_id));
        }   

        if(checked && selectedSupplier === null){
            setSelectedSupplier(supplierData);
        }
    }


    const checkInputChecked = (quote_item_id: string) => {
        return availableQuotes.filter((quote: any) => quote.quoteItems.some((item: any) => item.quote_item_id === quote_item_id)).length > 0;
    }

 
  
    
    const createNewQuote = () => {
        if(selectedQuotes.length === 0){
            onClose();
            return;
        }

        const newQuote = { ...selectedSupplier, quoteItems: [...selectedQuotes] };

        dispatch(createQuote(newQuote));
        onClose();
    };


    
    return {
        allQuotes,
        createNewQuote,
        checkQuoteIsDisabled,
        toggleQuote,
        checkInputChecked,
        checkCanSubmit
    }
}

export default useLogic;