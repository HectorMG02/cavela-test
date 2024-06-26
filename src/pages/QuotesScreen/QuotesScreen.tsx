import SupplierCard from '../../components/Cards/SupplierCard/SupplierCard';
import SupplierCardSkeleton from '../../components/Skeletons/SupplierCardSkeleton/SupplierCardSkeleton';
import useLogic from './logic';
import PlaceholderCard from '../../components/Cards/PlaceholderCard/PlaceholderCard';
import { motion } from 'framer-motion';
import { SupplierWithQuoteItemsType } from '../../redux/types';

const QuotesScreen = () => {
    const { loading, availableQuotes, closeCard } = useLogic();

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.4 * 0.2,
            },
        }),
    };



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
    

        const supplierCards = availableQuotes.slice(0, 3).map((quote: SupplierWithQuoteItemsType, index: number) => (
            <motion.div
                key={quote.supplier_id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"

            >
                <SupplierCard
                    quote={quote}
                    closeCard={() => closeCard(quote.supplier_id)}
                />
            </motion.div>
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
            <div className="grid md:grid-cols-3 gap-10 w-[95%]">
                {loading ? renderSkeletons() : renderCards()}
            </div>
        </>
    );
};

export default QuotesScreen;
