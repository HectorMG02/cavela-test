import './App.css';
import SupplierCard from './components/SupplierCard';

function App() {
    return (
        <>
            <h1 className="text-4xl">Cards</h1>
            <SupplierCard
                    name="Supplier 1"
                    rating={4.5}
                    badges={['Badge 1', 'Badge 2']}
                    variants={[
                        { name: 'Variant 1', quantity: 10, unitCost: '$10', total: '$100' },
                        { name: 'Variant 2', quantity: 20, unitCost: '$20', total: '$400' },
                    ]}
                />
        </>
    );
}

export default App;
