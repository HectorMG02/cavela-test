import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getQuotes, closeQuote } from "../../redux/quotes/quotes.action";
import { RootState } from "../../redux/types";
import { AppDispatch } from "../../redux/store";


const useLogic = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading } = useSelector((state: RootState) => state.loading);
    const { availableQuotes } = useSelector((state: RootState) => state.quotes)

    const closeCard = (supplier_id: string) => {
        dispatch(closeQuote(supplier_id));
    }


    useEffect(() => {
        dispatch(getQuotes());
    }, [dispatch]);



    
    return {
        loading,
        availableQuotes,
        closeCard
    };
};

export default useLogic;