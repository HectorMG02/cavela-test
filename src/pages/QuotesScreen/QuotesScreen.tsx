/* eslint-disable @typescript-eslint/no-explicit-any */
import SupplierCard from '../../components/SupplierCard/SupplierCard';
import SupplierCardSkeleton from '../../components/Skeletons/SupplierCardSkeleton/SupplierCardSkeleton';
import useLogic from './logic';
import PlaceholderCard from '../../components/PlaceholderCard/PlaceholderCard';
import PlaceholderCardSkeleton from '../../components/Skeletons/PlaceholderCardSkeleton/PlaceholderCardSkeleton';

const QuotesScreen = () => {
    const { loading, cardsData, closeCard } = useLogic();


    const renderSkeletons = () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 full-width">
            <SupplierCardSkeleton />
            <SupplierCardSkeleton />
            <PlaceholderCardSkeleton />
        </div>
    )

    const renderCards = () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 full-width">
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
                    scoreColorScheme={card.scoreColorScheme}
                    closeCard={() => closeCard(card.supplier_id)}
                />
            ))}

            <PlaceholderCard />
        </div>
    );

    return (
        <>
            <div className='ml-6'>
                <h1 className="text-4xl mb-6">Quotes Selection</h1>
                <div className="h-1 bg-gray-300 mb-6 w-full" />
            </div>
            {loading ? renderSkeletons() : renderCards()}
        </>
    );
};

export default QuotesScreen;
