import { useSelector } from 'react-redux';
import { RootState } from "../../../redux/types";


const useLogic = () => {
     const { allQuotes } = useSelector((state: RootState) => state.quotes);

    return {
        allQuotes
    }
}

export default useLogic;