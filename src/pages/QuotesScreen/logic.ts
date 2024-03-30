import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getQuotes } from "../../redux/quotes/quotes.action";
import { RootState } from "../../redux/types";



const useLogic = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    const { loading } = useSelector((state: RootState) => state.loading);
    const { quotes } = useSelector((state: RootState) => state.quotes);

    const closeCard = (supplier_id: string) => {
        // setCardsData(cardsData.filter(card => card.supplier_id !== supplier_id));
        console.log(supplier_id)
    }


    useEffect(() => {
        dispatch(getQuotes());
    }, [dispatch]);

    

    
    return {
        loading,
        quotes,
        closeCard
    };
};

export default useLogic;