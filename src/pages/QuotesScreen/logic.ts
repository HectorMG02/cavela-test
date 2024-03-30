import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getQuotes, closeQuote } from "../../redux/quotes/quotes.action";
import { RootState } from "../../redux/types";



const useLogic = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    const { loading } = useSelector((state: RootState) => state.loading);
    const { availableQuotes } = useSelector((state: RootState) => state.quotes);

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