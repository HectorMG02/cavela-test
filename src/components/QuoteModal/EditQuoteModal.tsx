/* eslint-disable @typescript-eslint/no-explicit-any */
import EditQuoteTable from '../Tables/EditQuoteTable/EditQuoteTable';
import useLogic from './logic';

const EditQuoteModal = ({ onClose, quoteData }: { onClose: () => void, quoteData: any }) => {
    useLogic({ onClose });

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10"
            id="new-quote-modal"
        >
            <div className="relative top-10 mx-auto p-5 border w-[90%] h-[86%] shadow-lg rounded-md bg-white overflow-y-auto mt-5
            ">
                <div className="mt-3 text-center">
                    <h3 className="text-2xl leading-6 font-medium text-gray-900">
                        Edit The Quote
                    </h3>
                </div>

                <EditQuoteTable onClose={onClose} 
                    currentData={quoteData}
                />
            </div>
        </div>
    );
};

export default EditQuoteModal;
