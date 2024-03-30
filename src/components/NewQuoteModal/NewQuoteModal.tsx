import SupplierTable from '../Tables/SupplierTable/SupplierTable';
import useLogic from './logic';

const NewQuoteModal = ({ onClose }: { onClose: () => void }) => {
    useLogic({ onClose });

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="new-quote-modal"
        >
            <div className="relative top-10 mx-auto p-5 border w-[90%] h-[86%] shadow-lg rounded-md bg-white overflow-y-auto mt-5
            ">
                <div className="mt-3 text-center">
                    <h3 className="text-2xl leading-6 font-medium text-gray-900">
                        Create A New Quote
                    </h3>
                </div>

                <SupplierTable />
            </div>
        </div>
    );
};

export default NewQuoteModal;
