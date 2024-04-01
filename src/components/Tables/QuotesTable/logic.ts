import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseQuoteLogicProps } from './types';
import { closeQuote, createQuote, updateQuote } from '../../../redux/quotes/quotes.action';
import { QuoteItemType } from '../../../types/dataTypes';
import { RootState, SupplierWithQuoteItemsType } from '../../../redux/types';



const useLogic = ({ onClose, mode, currentData }: UseQuoteLogicProps) => {
    const dispatch = useDispatch();
    const { allQuotes, availableQuotes } = useSelector((state: RootState) => state.quotes);
    const [selectedQuotes, setSelectedQuotes] = useState<QuoteItemType[]>([]);
    const [selectedSupplier, setSelectedSupplier] = useState<SupplierWithQuoteItemsType>();

    useEffect(() => {
        if (mode === 'edit' && currentData != undefined) {
            setSelectedQuotes(currentData.quoteItems);
            setSelectedSupplier(currentData);
        }
    }, [mode, currentData]);

    const findQuoteData = (quote_id: string, supplier_id: string) => {
        const supplierData: SupplierWithQuoteItemsType | undefined = allQuotes.find((quote: SupplierWithQuoteItemsType) => quote.supplier_id === supplier_id);
        if(!supplierData) return ({ supplierData: null, quote: null });
        
        const quote = supplierData?.quoteItems.find((item: QuoteItemType) => item.quote_item_id === quote_id);
        return { supplierData, quote };
    };

    const toggleQuote = (quote_id: string, supplier_id: string, checked: boolean) => {
        const { supplierData, quote } = findQuoteData(quote_id, supplier_id);
        if (!quote) return;

        const newSelectedQuotes = checked
            ? [...selectedQuotes, quote]
            : selectedQuotes.filter((item) => item.quote_item_id !== quote_id);

        setSelectedQuotes(newSelectedQuotes);
        setSelectedSupplier(checked && newSelectedQuotes.length ? supplierData : undefined);
    };

    const submitQuote = () => {
        if(selectedQuotes.length === 0){
            if(mode === 'edit' && currentData){
                dispatch(closeQuote(currentData.supplier_id));                
            }

            onClose();
            return;
        }
 
 
        if (mode === 'create' && selectedSupplier) {
            dispatch(createQuote({ ...selectedSupplier, quoteItems: selectedQuotes }));
        }
        else if (mode === 'edit' && currentData) {
            dispatch(updateQuote(currentData.supplier_id, selectedQuotes));
        }

        onClose();
    };

    const checkQuoteIsDisabled = (supplier_id: string) => {
        return mode === 'edit'
            ? currentData?.supplier_id !== supplier_id
            : availableQuotes.some((quote: SupplierWithQuoteItemsType) => quote.supplier_id === supplier_id) || (selectedQuotes.length > 0 && !selectedQuotes.some((quote) => quote.supplier_id === supplier_id));
    };

    const checkInputChecked = (quote_item_id: string) => {
        return availableQuotes.some((quote: SupplierWithQuoteItemsType) => 
            quote.quoteItems.some((item: QuoteItemType) => item.quote_item_id === quote_item_id));
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
