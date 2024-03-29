// QuotesTable.tsx
import { Variant } from '../SupplierCard/types';

const QuotesTable = ({variants}: { variants: Variant[]}) => {

  console.log(variants)
  const grandTotal = variants.reduce((acc, item) => acc + Number(item.total), 0);

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
          {variants.map((item: Variant, index: number) => (
            <tr key={index}>
              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.name.split("-")[1].trim()}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.quantity}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {`$${item.unitCost}`}
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
