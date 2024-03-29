import React from 'react';

const QuotesTableSkeleton: React.FC = () => {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg animate-pulse">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold text-gray-300" />
            <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold text-gray-300" />
            <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold text-gray-300" />
            <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold text-gray-300" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[...Array(2)].map((_, index) => (
            <tr key={index}>
              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                <div className="h-2 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm">
                <div className="h-2 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm">
                <div className="h-2 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm">
                <div className="h-2 bg-gray-200 rounded"></div>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50">
            <td colSpan={3} className="text-sm font-semibold text-gray-300 text-right px-3 py-4" />
            <td className="px-3 py-4 text-sm font-semibold">
              <div className="h-2 bg-gray-200 rounded"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuotesTableSkeleton;
