/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../redux/types";
import { useEffect, useState } from 'react';
import { createQuote } from '../../../redux/quotes/quotes.action';
import { cardColorSchemes, ratingColorSchemes } from '../../../utils/colors';


const useLogic = ({ onClose, isEditing, currentData } : { onClose: () => void, isEditing: boolean, currentData: any }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    const { allQuotes, availableQuotes } = useSelector((state: RootState) => state.quotes);
    const [ selectedSupplierId, setSelectedSupplierId ] = useState<any>(null);
    const [ selectedQuotes, setSelectedQuotes ] = useState<any[]>([]);


    const checkCreateQuoteSuppliersDisabled = (supplier_id: string) => {
        const supplierIsUsed =  !!availableQuotes.find((quote: any) => {
            return quote.supplier_id === supplier_id
        })

        if(!supplierIsUsed && selectedSupplierId != null){
            return selectedSupplierId !== supplier_id
        }

        return supplierIsUsed
    }
 

    const checkQuoteIsDisabled  = (supplier_id: string, supplier_name?: string) => {
        // if(supplier_name) console.log("after: " + supplier_name, selectedQuotes.length, selectedQuotes)

        if(!isEditing && selectedQuotes.length === 0){
            return checkCreateQuoteSuppliersDisabled(supplier_id)
        }

        return selectedSupplierId !== supplier_id
     }


     const checkInputChecked = (quoteItemId: string, supplierId: string) => {
        if(!isEditing){
            // TODO: FIX
            return false;
            return checkQuoteIsDisabled(supplierId)
        }
 
        return selectedQuotes.find(quote => quote.quote_item_id === quoteItemId);
     }

  
     const toggleQuote = (quoteItemId: string, quoteData: any, insert: boolean) => {
        if(insert) {
            setSelectedQuotes([...selectedQuotes, quoteData]);
            setSelectedSupplierId(quoteData.supplier_id);
        } else {
            setSelectedQuotes(selectedQuotes.filter(quote => quote.quote_item_id !== quoteItemId));
            if(selectedQuotes.length === 1){
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
        if(selectedQuotes.length === 0){
            onClose();
            return;
        }

        const groupedQuotes = groupBySupplierId(selectedQuotes);
        const formattedQuotes = formatQuotesForDispatch(groupedQuotes);
        dispatch(createQuote(formattedQuotes[0]));
        onClose();
    };


    useEffect(() => {
        if(isEditing && currentData){
            const currentSelectedQuotes = currentData.quoteItems.map((item: any) => {
                return {
                    supplier_id: currentData.supplier_id,
                    name: currentData.name,
                    score: currentData.score,
                    quote_item_id: item.quote_item_id,
                    ...item,
                    colorScheme: currentData.colorScheme,
                    ratingColorScheme: currentData.ratingColorScheme,
                }
            })

            setSelectedQuotes(currentSelectedQuotes);
            setSelectedSupplierId(currentData.supplier_id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        allQuotes,
        checkQuoteIsDisabled,
        toggleQuote,
        createNewQuote,
        selectedSupplierId,
        selectedQuotes,
        checkInputChecked
    }
}

export default useLogic;