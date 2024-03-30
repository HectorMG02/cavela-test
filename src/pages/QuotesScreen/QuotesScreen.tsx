/* eslint-disable @typescript-eslint/no-explicit-any */
import SupplierCard from '../../components/Cards/SupplierCard/SupplierCard';
import SupplierCardSkeleton from '../../components/Skeletons/SupplierCardSkeleton/SupplierCardSkeleton';
import useLogic from './logic';
import PlaceholderCard from '../../components/Cards/PlaceholderCard/PlaceholderCard';

const QuotesScreen = () => {
    const { loading, quotes, closeCard } = useLogic();


    const renderSkeletons = () => (
        <>
            <SupplierCardSkeleton />
            <SupplierCardSkeleton />
            <SupplierCardSkeleton />
        </>
    )

    const renderCards = () => {
        const numberOfCards = quotes.length;
        const placeholdersToAdd = Math.max(0, 3 - numberOfCards);
    


        const supplierCards = quotes.slice(0, 3).map((quote: any) => (
            <SupplierCard
                key={quote.supplier_id}
                name={quote.name}
                rating={Number(quote.score).toFixed(1)}
                variants={quote.quoteItems.map((item: any) => ({
                    name: item.variant,
                    quantity: item.quantity,
                    unitCost: item['unit_cost'].slice(1),
                    total: (parseFloat(item['unit_cost'].slice(1)) * item.quantity).toFixed(2),
                }))}
                colorScheme={quote.colorScheme}
                ratingColorScheme={quote.ratingColorScheme}
                closeCard={() => closeCard(quote.supplier_id)}
            />
        ));
    
        const placeholders = placeholdersToAdd > 0 ? [<PlaceholderCard key={`placeholder-${numberOfCards}`} />] : [];
    
        return (
            <>
                {supplierCards}
                {placeholders}
            </>
        );
    };
    

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
