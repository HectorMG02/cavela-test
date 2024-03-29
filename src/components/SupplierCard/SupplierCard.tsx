import React from 'react';
import QuotesTable from '../Tables/QuotesTable/QuotesTable';
import { SupplierCardProps } from './types';
import useLogic from './logic';

const SupplierCard: React.FC<SupplierCardProps> = ({
    name,
    rating,
    colorScheme,
    scoreColorScheme,
    variants,
    closeCard,
}) => {
    const { backgroundColor, borderColor, scoreBackgroundColor, scoreBorderColor, scoreTextColor } = useLogic({ colorScheme, scoreColorScheme });

    console.log(scoreColorScheme)

    return (
        <div
            className="w-full rounded shadow-lg p-4 md:m-8 relative border-4 hover:border-gray-400 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-xl hover:scale-105
            "
            style={{
                backgroundColor: backgroundColor,
                borderColor: borderColor,
            }}
        >
            <div className="flex justify-between items-center mb-4">
                <div className="p-3">
                    <h3 className="font-bold text-3xl">{name}</h3>
                </div>
                <div
                    className="size-10 flex items-center justify-centerborder-2 p-2 m-5 rounded-md border"
                    style={{
                        backgroundColor: scoreBackgroundColor,
                        borderColor: scoreBorderColor,
                        color: scoreTextColor,
                    }}
                >
                    {rating}
                </div>
            </div>

            <button
                className={`absolute top-2 right-2 transform translate-x-6 -translate-y-1/2 text-black hover:text-gray-700 border-[3px] border-[${colorScheme?.borderColor}] rounded-full p-1 bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out
                hover:scale-110`}
                onClick={closeCard}
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
                className={`absolute top-2 right-2 transform translate-x-6 translate-y-6 text-black hover:text-gray-700 border-[3px] border-[${colorScheme?.borderColor}] rounded-full p-1 bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-110
                `}
                onClick={closeCard}
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

            <QuotesTable variants={variants} />
        </div>
    );
};

export default SupplierCard;
