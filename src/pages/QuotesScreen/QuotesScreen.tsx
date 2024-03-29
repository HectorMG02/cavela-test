/* eslint-disable @typescript-eslint/no-explicit-any */
import SupplierCard from '../../components/SupplierCard/SupplierCard';
import SupplierCardSkeleton from '../../components/SupplierCardSkeleton/SupplierCardSkeleton';
import useLogic from './logic';

const QuotesScreen = () => {
    const { loading, cardsData } = useLogic();

    const renderSkeletons = () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 full-width">
            <SupplierCardSkeleton />
            <SupplierCardSkeleton />
            <SupplierCardSkeleton />
        </div>
    )

    const renderCards = () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 full-width">
            {cardsData.map((card: any, index: number) => (
                <SupplierCard
                    key={index}
                    name={card.name}
                    rating={card.score}
                    variants={card.quoteItems.map((item: any) => ({
                        name: item.variant,
                        quantity: item.quantity,
                        unitCost: item['unit cost'].slice(1),
                        total: parseFloat(item['unit cost'].slice(1)) * (item.quantity).toFixed(2),
                    }))}
                    colorScheme={card.colorScheme}
                />
            ))}
        </div>
    );

    return (
        <>
            <h1 className="text-4xl ml-4 mb-6">Cards</h1>
            {loading ? renderSkeletons() : renderCards()}
        </>
    );
};

export default QuotesScreen;
