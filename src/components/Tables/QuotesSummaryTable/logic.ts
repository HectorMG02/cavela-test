import { Variant } from '../../Cards/SupplierCard/types';


const useLogic = ({ variants }: { variants: Variant[] }) => {
    const sumTotal = variants?.reduce(
        (acc, item) => acc + Number(item.total),
        0
    );

     
    return {
        sumTotal,
    };
};

export default useLogic;
