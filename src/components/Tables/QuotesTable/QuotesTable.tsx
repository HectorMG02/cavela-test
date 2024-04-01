/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import RatingBox from '../../RatingBox/RatingBox';
import useLogic from './logic';
import { QuoteTableProps } from './types';
import { QuoteItemType } from '../../../types/dataTypes';



const QuoteTable: React.FC<QuoteTableProps> = ({ onClose, mode, currentData = null }) => {
  const { allQuotes, toggleQuote, submitQuote, checkQuoteIsDisabled, checkInputChecked, checkCanSubmit } = useLogic({ onClose, mode, currentData });

  return (
    <div>
      {allQuotes.map((quote: any, index: number) => (
        <div key={index} className="flex flex-row items-center mt-10">
          <div className="flex flex-row items-center mr-4 mt-[50px]">
            <h2 className="text-xl font-bold text-gray-700 mr-2">
              {quote.name}
            </h2>
            <RatingBox
              backgroundColor={quote.ratingColorScheme.backgroundColor}
              borderColor={quote.ratingColorScheme.borderColor}
              textColor={quote.ratingColorScheme.textColor}
              rating={Number(quote.score).toFixed(1)}
              className="size-12 p-3"
            />
          </div>
          <div className="flex-grow overflow-x-auto">
          <table className="w-full divide-y divide-gray-500 text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Variant
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Cost
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Lead Time
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        MOQ
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Sample Cost
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Add to Quote
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {quote.quoteItems.map(
                                    (item: QuoteItemType, itemIndex: number) => (
                                        <tr
                                            key={itemIndex}
                                            className={`${
                                                checkQuoteIsDisabled(
                                                    item.supplier_id
                                                ) && 'bg-gray-300'
                                            }`}
                                        >
                                            <td
                                                className="px-6 py-4 text-sm font-medium text-gray-900 truncate overflow-hidden relative cursor-pointer"
                                                style={{ maxWidth: '105px' }}
                                            >
                                                {item.variant
                                                    .split('-')[1]
                                                    .trim()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.quantity}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.unit_cost}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.lead_time}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.moq}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.sample_cost}
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center justify-center"
                                            >
                                                <input
                                                    type="checkbox"
                                                    disabled={checkQuoteIsDisabled(
                                                        item.supplier_id,
                                                    )}
                                                    onChange={(e) =>
                                                        toggleQuote(item.quote_item_id, quote.supplier_id, e.target.checked)
                                                    }
                                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                    defaultChecked={checkInputChecked(item.quote_item_id)}
                                                />
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
          </div>
        </div>
      ))}
      <div className="pb-20">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out active:bg-blue-800 hover:shadow-lg mb-5 mt-10 float-end disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={submitQuote}
          disabled={checkCanSubmit()}
        >
          {mode === 'create' ? 'Apply' : 'Update changes'}
        </button>
      </div>
    </div>
  );
};

export default QuoteTable;
