/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../redux/types";
import { useState } from 'react';
import { createQuote } from '../../../redux/quotes/quotes.action';
import { cardColorSchemes, ratingColorSchemes } from '../../../utils/colors';


const useLogic = ({ onClose } : { onClose: () => void }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    const { allQuotes, availableQuotes } = useSelector((state: RootState) => state.quotes);
    const [ selectedQuotes, setSelectedQuotes ] = useState<any[]>([]);
    const [ selectedSupplierId, setSelectedSupplierId ] = useState<any>(null);


     const checkAvailableQuote  = (supplier_id: string) => {
        const supplierIsUsed =  !!availableQuotes.find((quote: any) => {
            return quote.supplier_id === supplier_id
        })

        if(!supplierIsUsed && selectedSupplierId != null){
            return selectedSupplierId !== supplier_id
        }

        return supplierIsUsed
     }

  
     const toggleQuote = (quote: any) => {
        const quoteAlreadySelected = !!selectedQuotes.find((item: any) => item.quote_item_id === quote.quote_item_id);
    
        if (!quoteAlreadySelected) {
            setSelectedQuotes([...selectedQuotes, quote]);
            // Establece el supplier_id si aún no se ha seleccionado uno
            if (!selectedSupplierId) {
                setSelectedSupplierId(quote.supplier_id);
            }
        } else {
            setSelectedQuotes(selectedQuotes.filter((item: any) => item.quote_item_id !== quote.quote_item_id));
            // Si era el último quoteItem de ese supplier, limpia el selectedSupplierId
            if (selectedQuotes.filter((item: any) => item.supplier_id === quote.supplier_id).length === 1) {
                console.log("se elimina")
                setSelectedSupplierId(null);
            }
        }
    };
    

     
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
        const groupedQuotes = groupBySupplierId(selectedQuotes);
        const formattedQuotes = formatQuotesForDispatch(groupedQuotes);
        dispatch(createQuote(formattedQuotes[0]));
        onClose();
    };

    return {
        allQuotes,
        checkAvailableQuote,
        toggleQuote,
        createNewQuote,
        selectedSupplierId,
        selectedQuotes
    }
}

export default useLogic;