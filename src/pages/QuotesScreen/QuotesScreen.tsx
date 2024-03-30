/* eslint-disable @typescript-eslint/no-explicit-any */
import SupplierCard from '../../components/Cards/SupplierCard/SupplierCard';
import SupplierCardSkeleton from '../../components/Skeletons/SupplierCardSkeleton/SupplierCardSkeleton';
import useLogic from './logic';
import PlaceholderCard from '../../components/Cards/PlaceholderCard/PlaceholderCard';

const QuotesScreen = () => {
    const { loading, availableQuotes, closeCard } = useLogic();

    const renderSkeletons = () => (
        <>
            <SupplierCardSkeleton />
            <SupplierCardSkeleton />
            <SupplierCardSkeleton />
        </>
    )

    const renderCards = () => {
        const numberOfCards = availableQuotes.length || 0;
        const placeholdersToAdd = Math.max(0, 3 - numberOfCards);
    


        const supplierCards = availableQuotes.slice(0, 3).map((quote: any) => (
            <SupplierCard
                key={quote.supplier_id}
                quote={quote}
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
