import { useEffect, useState } from 'react';
import { Variant } from '../../Cards/SupplierCard/types';

const useLogic = ({ variants }: { variants: Variant[] }) => {
    const grandTotal = variants.reduce(
        (acc, item) => acc + Number(item.total),
        0
    );
    const [animatedTotal, setAnimatedTotal] = useState(0);

    useEffect(() => {
        const speed = 1.25;
        const increment = (grandTotal / (60 * 2)) * speed;
        const intervalId = setInterval(() => {
            setAnimatedTotal((prevTotal) => {
                if (prevTotal + increment >= grandTotal) {
                    clearInterval(intervalId);
                    return grandTotal;
                }
                return prevTotal + increment;
            });
        }, 1000 / (60 * 2));

        return () => clearInterval(intervalId);
    }, [grandTotal]);

    return {
        animatedTotal,
    };
};

export default useLogic;
