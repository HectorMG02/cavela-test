/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../redux/types";
import { createQuote } from '../../../redux/quotes/quotes.action';
import { cardColorSchemes, ratingColorSchemes } from '../../../utils/colors';
import { useState } from 'react';


const useLogic = ({ onClose } : { onClose: () => void}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    const { allQuotes, availableQuotes } = useSelector((state: RootState) => state.quotes);
    const [selectedQuotes, setSelectedQuotes] = useState<any>([])


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
        if(checked){
            setSelectedQuotes([...selectedQuotes, {quote_id, supplier_id}]);
        } else {
            setSelectedQuotes(selectedQuotes.filter((quote: any) => quote.quote_id !== quote_id));
        }
    }


    const checkInputChecked = (quote_item_id: string) => {
        return availableQuotes.filter((quote: any) => quote.quoteItems.some((item: any) => item.quote_item_id === quote_item_id)).length > 0;
    }
 
 

    const groupBySupplierId = (quotes: any) => {
        return quotes.reduce((acc: any, current: any) => {
            const { supplier_id } = current;
            if (!acc[supplier_id]) {
                acc[supplier_id] = [];
            }
            acc[supplier_id].push(current);
            return acc;
        }, {});
    };
    
    const formatQuotesForDispatch = (groupedQuotes: any) => {
        return Object.keys(groupedQuotes).map((supplier_id) => {
            const supplier = groupedQuotes[supplier_id][0];
            return {
                supplier_id,
                name: supplier.name,
                score: supplier.score,
                quoteItems: groupedQuotes[supplier_id].map((item: any) => ({
                    quote_item_id: item.quote_item_id,
                    variant: item.variant,
                    moq: item.moq,
                    quantity: item.quantity,
                    unit_cost: item.unit_cost,
                    lead_time: item.lead_time,
                    sample_cost: item.sample_cost,
                    badges: item.badges,
                })),
                colorScheme: cardColorSchemes.find(scheme => supplier.score >= scheme.minScore),
                ratingColorScheme: ratingColorSchemes.find(scheme => supplier.score >= scheme.minScore)
            };
        });
    };
    
    const createNewQuote = () => {
        if(selectedQuotes.length === 0){
            onClose();
            return;
        }

        const groupedQuotes = groupBySupplierId(selectedQuotes);
        const formattedQuotes = formatQuotesForDispatch(groupedQuotes);

        dispatch(createQuote(formattedQuotes[0]));
        onClose();
    };


    
    return {
        allQuotes,
        createNewQuote,
        checkQuoteIsDisabled,
        toggleQuote,
        checkInputChecked
    }
}

export default useLogic;