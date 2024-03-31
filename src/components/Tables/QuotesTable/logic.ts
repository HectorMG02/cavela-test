/* eslint-disable @typescript-eslint/no-explicit-any */
// useQuoteLogic.ts
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseQuoteLogicProps } from './types';
import { closeQuote, createQuote, updateQuote } from '../../../redux/quotes/quotes.action';



const useLogic = ({ onClose, currentData, mode }: UseQuoteLogicProps) => {
    const dispatch = useDispatch();
    const { allQuotes, availableQuotes } = useSelector((state: any) => state.quotes);
    const [selectedQuotes, setSelectedQuotes] = useState<any[]>([]);
    const [selectedSupplier, setSelectedSupplier] = useState<any>(null);

    useEffect(() => {
        if (mode === 'edit' && currentData) {
            setSelectedQuotes(currentData.quoteItems);
            setSelectedSupplier(currentData);
        }
    }, [mode, currentData]);

    const toggleQuote = (quote_id: string, supplier_id: string, checked: boolean) => {
       if(mode==='edit'){
        const quoteItems = allQuotes.find((quote: any) => quote.supplier_id === supplier_id).quoteItems
        const quote = quoteItems.find((item: any) => item.quote_item_id === quote_id);
  
          if(checked){
              setSelectedQuotes([...selectedQuotes, quote]);
          } else {
              setSelectedQuotes(selectedQuotes.filter((quote: any) => quote.quote_item_id !== quote_id));
          }   
  
       } else if(mode==='create'){
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
    };

    const submitQuote = () => {
        if (mode === 'create') {
            createNewQuote();
        } else if (mode === 'edit') {
            updateQuoteData();
        }
        onClose();
    };


    const createNewQuote = () => {
        if(selectedQuotes.length === 0){
            onClose();
            return;
        }

        const newQuote = { ...selectedSupplier, quoteItems: [...selectedQuotes] };

        dispatch(createQuote(newQuote));
        onClose();
    };



    const updateQuoteData = () => {
        if(selectedQuotes.length === 0){
            dispatch(closeQuote(currentData.supplier_id))
        } else{
            dispatch(updateQuote(currentData.supplier_id, selectedQuotes));
        }

        onClose();
    };



    const checkQuoteIsDisabled = (supplier_id: string) => {
        if(mode === "create") {
            const supplierIsUsed = availableQuotes.filter((quote: any) => quote.supplier_id === supplier_id).length > 0;

            if(supplierIsUsed){
               return true;
            }
    
            if(selectedQuotes.length > 0){
                const selectedQuote = selectedQuotes.find((quote: any) => quote.supplier_id === supplier_id);
                return selectedQuote ? false : true;
            }
        } else if(mode === "edit") {
            return currentData.supplier_id !== supplier_id;
        }
    };


    const checkInputChecked = (quote_item_id: string) => {
        return availableQuotes.filter((quote: any) => quote.quoteItems.some((item: any) => item.quote_item_id === quote_item_id)).length > 0;
    }

    const checkCanSubmit = () => {
        if(mode === 'create'){
            return selectedQuotes.length === 0 || selectedSupplier === null;
        }
    }


    return {
        allQuotes,
        toggleQuote,
        submitQuote,
        checkQuoteIsDisabled,
        checkInputChecked,
        checkCanSubmit,
    };
};

export default useLogic;
