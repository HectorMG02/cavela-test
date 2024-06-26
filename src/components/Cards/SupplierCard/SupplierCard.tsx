import QuotesSummaryTable from '../../Tables/QuotesSummaryTable/QuotesSummaryTable';
import { SupplierCardProps } from './types';
import useLogic from './logic';
import RatingBox from '../../RatingBox/RatingBox';
import QuoteModal from '../../QuoteModal/QuoteModal';
import { QuoteItemType } from '../../../types/dataTypes';

const SupplierCard = ({ quote, closeCard }: SupplierCardProps) => {
    const {
        backgroundColor,
        borderColor,
        scoreBackgroundColor,
        scoreBorderColor,
        scoreTextColor,
        open,
        setOpen,
        onClose,
    } = useLogic({ quote });
 
    return (
        <div>
            <div
                className="w-full rounded shadow-lg p-4 md:m-8 relative border-4 hover:border-gray-400 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-xl hover:scale-105
            "
                style={{
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                }}
            >
                <div onClick={() => setOpen(true)}>
                    <div className="flex justify-between items-center mb-4">
                        <div className="p-3">
                            <h3 className="font-bold text-3xl">{quote.name}</h3>
                        </div>

                        <RatingBox
                            backgroundColor={scoreBackgroundColor}
                            borderColor={scoreBorderColor}
                            textColor={scoreTextColor}
                            rating={Number(quote.score).toFixed(1)}
                        />
                    </div>

                    <QuotesSummaryTable
                        variants={quote.quoteItems.map((item: QuoteItemType) => ({
                            name: item.variant,
                            quantity: item.quantity,
                            unitCost: item['unit_cost'].slice(1),
                            total: (
                                parseFloat(item['unit_cost'].slice(1)) *
                                item.quantity
                            ).toFixed(2),
                        }))}
                    />
                </div>

                <button
                    className={`absolute top-2 right-2 transform translate-x-7 -translate-y-1/2 text-black hover:text-gray-700 border-[3px] border-[${quote.colorScheme?.borderColor}] rounded-full p-1 bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out
                hover:scale-110`}
                    onClick={() => closeCard(quote.supplier_id)}
                >
                    <svg
                        className="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <button
                    className={`absolute top-2 right-2 transform translate-x-7 translate-y-6 text-black hover:text-gray-700 border-[3px] border-[${quote.colorScheme?.borderColor}] rounded-full p-1 bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-110
                `}
                    onClick={() => closeCard(quote.supplier_id)}
                >
                    <svg
                        className="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                </button>
            </div>

            {open && (
                <QuoteModal onClose={onClose} quoteData={quote} mode="edit" />
            )}
        </div>
    );
};

export default SupplierCard;
