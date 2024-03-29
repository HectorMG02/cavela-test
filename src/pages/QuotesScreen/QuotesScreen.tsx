import SupplierCard from '../../components/SupplierCard/SupplierCard';
import SupplierCardSkeleton from '../../components/SupplierCardSkeleton/SupplierCardSkeleton';
import useLogic from './logic';

const QuotesScreen = () => {
    const { loading } = useLogic()



    return (
        <>
            <h1 className="text-4xl ml-4">Cards</h1>


            {
                loading ? (
                    <SupplierCardSkeleton />
                ) : (
                    <SupplierCard
                    name="Supplier 1"
                    rating={4.5}
                    badges={['Badge 1', 'Badge 2']}
                    variants={[
                        {
                            name: 'Variant 1',
                            quantity: 10,
                            unitCost: '$10',
                            total: '$100',
                        },
                        {
                            name: 'Variant 2',
                            quantity: 20,
                            unitCost: '$20',
                            total: '$400',
                        },
                    ]}
                    colorScheme={{
                        backgroundColor: '#B7CBC7',
                        borderColor: '#798E8B',
                    }}
                />
                )
            }

        </>
    );
};

export default QuotesScreen;
