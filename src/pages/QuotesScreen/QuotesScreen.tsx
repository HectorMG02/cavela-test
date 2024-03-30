/* eslint-disable @typescript-eslint/no-explicit-any */
import SupplierCard from '../../components/SupplierCard/SupplierCard';
import SupplierCardSkeleton from '../../components/Skeletons/SupplierCardSkeleton/SupplierCardSkeleton';
import useLogic from './logic';
import PlaceholderCard from '../../components/PlaceholderCard/PlaceholderCard';
import PlaceholderCardSkeleton from '../../components/Skeletons/PlaceholderCardSkeleton/PlaceholderCardSkeleton';

const QuotesScreen = () => {
    const { loading, cardsData, closeCard } = useLogic();


    const renderSkeletons = () => (
        <>
         <SupplierCardSkeleton />
            <SupplierCardSkeleton />
            <PlaceholderCardSkeleton />
            </>
    )

    const renderCards = () => (
         <>
            {cardsData.map((card: any, index: number) => (
                <SupplierCard
                    key={index}
                    name={card.name}
                    rating={Number(card.score).toFixed(1)}
                    variants={card.quoteItems.map((item: any) => ({
                        name: item.variant,
                        quantity: item.quantity,
                        unitCost: item['unit_cost'].slice(1),
                        total: parseFloat(item['unit_cost'].slice(1)) * (item.quantity).toFixed(2),
                    }))}
                    colorScheme={card.colorScheme}
                    ratingColorScheme={card.ratingColorScheme}
                    closeCard={() => closeCard(card.supplier_id)}
                />
            ))}

            <PlaceholderCard />
            </>
    );

    return (
        <>
            <div className='ml-6'>
                <h1 className="text-4xl mb-6">Quotes Selection</h1>
                <div className="h-1 bg-gray-300 mb-6 w-[95%]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[95%]">
            {loading ? renderSkeletons() : renderCards()}
            </div>
        </>
    );
};

export default QuotesScreen;
