// QuotesTable.tsx

import React from 'react';

const QuotesTable: React.FC = () => {
  const data = [
    { variant: 'Black Ebony', quantity: 250, unitCost: 1.30, total: 500 },
    { variant: 'Brown Ash', quantity: 250, unitCost: 1.50, total: 250 },
  ];

  const grandTotal = data.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold text-gray-900">
              Variant
            </th>
            <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold text-gray-900">
              Quantity
            </th>
            <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold text-gray-900">
              Unit Cost
            </th>
            <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold text-gray-900">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.variant}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.quantity}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {`$${item.unitCost.toFixed(2)}`}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {`$${item.total}`}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50">
            <td colSpan={3} className="text-sm font-semibold text-gray-900 text-right px-3 py-4">
              Total
            </td>
            <td className="px-3 py-4 text-sm font-semibold text-gray-900">
              {`$${grandTotal}`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuotesTable;
