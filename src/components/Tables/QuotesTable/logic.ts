/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseQuoteLogicProps } from './types';
import { closeQuote, createQuote, updateQuote } from '../../../redux/quotes/quotes.action';
import { Quote, QuoteItem } from '../../../types/dataTypes';

const useLogic = ({ onClose, currentData, mode }: UseQuoteLogicProps) => {
    const dispatch = useDispatch();
    const { allQuotes, availableQuotes } = useSelector((state: any) => state.quotes);
    const [selectedQuotes, setSelectedQuotes] = useState<QuoteItem[]>([]);
    const [selectedSupplier, setSelectedSupplier] = useState<Quote | null>(null);

    useEffect(() => {
        if (mode === 'edit' && currentData) {
            setSelectedQuotes(currentData.quoteItems);
            setSelectedSupplier(currentData);
        }
    }, [mode, currentData]);

    const findQuoteData = (quote_id: string, supplier_id: string) => {
        const supplierData = allQuotes.find((quote: any) => quote.supplier_id === supplier_id);
        const quote = supplierData?.quoteItems.find((item: QuoteItem) => item.quote_item_id === quote_id);
        return { supplierData, quote };
    };

    const toggleQuote = (quote_id: string, supplier_id: string, checked: boolean) => {
        const { supplierData, quote } = findQuoteData(quote_id, supplier_id);
        if (!quote) return;

        const newSelectedQuotes = checked
            ? [...selectedQuotes, quote]
            : selectedQuotes.filter((item) => item.quote_item_id !== quote_id);

        setSelectedQuotes(newSelectedQuotes);
        setSelectedSupplier(checked && newSelectedQuotes.length ? supplierData : null);
    };

    const submitQuote = () => {
        if(selectedQuotes.length === 0){
            if(mode === 'edit'){
                dispatch(closeQuote(currentData.supplier_id));                
            }

            onClose();
            return;
        }
 
        const quoteAction = mode === 'create'
            ? () => dispatch(createQuote({ ...selectedSupplier, quoteItems: selectedQuotes }))
            : () => dispatch(updateQuote(currentData.supplier_id, selectedQuotes));

        quoteAction();
        onClose();
    };

    const checkQuoteIsDisabled = (supplier_id: string) => {
        return mode === 'edit'
            ? currentData.supplier_id !== supplier_id
            : availableQuotes.some((quote: any) => quote.supplier_id === supplier_id) || (selectedQuotes.length > 0 && !selectedQuotes.some((quote) => quote.supplier_id === supplier_id));
    };

    const checkInputChecked = (quote_item_id: string) => {
        return availableQuotes.some((quote: any) => 
            quote.quoteItems.some((item: QuoteItem) => item.quote_item_id === quote_item_id));
    };

    const checkCanSubmit = () => {
        if(mode === 'edit') return false;

        return selectedQuotes.length === 0 || (mode === 'create' && !selectedSupplier);
    };

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
